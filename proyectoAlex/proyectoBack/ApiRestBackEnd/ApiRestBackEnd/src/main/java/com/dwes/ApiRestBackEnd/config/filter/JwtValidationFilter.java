package com.dwes.ApiRestBackEnd.config.filter;

import com.dwes.ApiRestBackEnd.config.SimpleGrantedAuthorityJsonCreator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.dwes.ApiRestBackEnd.config.TokenJwtConfig.*;

public class JwtValidationFilter extends BasicAuthenticationFilter {
    public JwtValidationFilter(AuthenticationManager authenticationManager){
        super(authenticationManager);
    }
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException{
        //Obtencion del token enviado desde el cliente
        String header = request.getHeader(HEADER_AUTHORIZATION);
        //Si es un endpoint publico no hace nada
        if (header==null || !header.startsWith(PREFIX_TOKEN)){
            chain.doFilter(request,response);
            return;
        }
        //Le quito el prefijo al token
        String token = header.replace(PREFIX_TOKEN,"");
        try{
            Claims claims = Jwts.parser().verifyWith((SecretKey) SECRET_KEY).build().parseSignedClaims(token).getPayload();
            //Obtencion del username
            String username = claims.getSubject();
            //Obtencion de los roles
            Object authoritiesClaims = claims.get("authorities");
            //Proceso los roles
            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.addMixIn(SimpleGrantedAuthority.class, SimpleGrantedAuthorityJsonCreator.class);
            TypeFactory typeFactory = objectMapper.getTypeFactory();
            List<SimpleGrantedAuthority> authorities = objectMapper.readValue(
                    authoritiesClaims.toString().getBytes(),
                    typeFactory.constructCollectionType(List.class, SimpleGrantedAuthority.class)
            );
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username,null,authorities);
            //Se autentifica
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            //se continua con los demas filtros
            chain.doFilter(request,response);
        } catch (JwtException e){
            Map<String, String> body = new HashMap<>();
            body.put("error", e.getMessage());
            body.put("message", "El token Jwt es inválido");
            response.getWriter().write(new ObjectMapper().writeValueAsString(body));
            response.setStatus(HttpStatus.UNAUTHORIZED.value());
            response.setContentType(CONTENT_TYPE);
        }
    }
}
