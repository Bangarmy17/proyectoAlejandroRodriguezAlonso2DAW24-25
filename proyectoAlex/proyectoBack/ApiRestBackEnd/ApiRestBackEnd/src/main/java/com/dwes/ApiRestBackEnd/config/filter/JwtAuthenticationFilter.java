package com.dwes.ApiRestBackEnd.config.filter;

import com.dwes.ApiRestBackEnd.model.Usuario;
import com.dwes.ApiRestBackEnd.repository.UsuarioRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import static com.dwes.ApiRestBackEnd.config.TokenJwtConfig.*;
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;
    private UsuarioRepository usuarioRepository;
    @Autowired
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, UsuarioRepository usuarioRepository){
        this.authenticationManager = authenticationManager;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException{
        Usuario usuario = null;
        String userName = null;
        String password = null;
        try{
            usuario = new ObjectMapper().readValue(request.getInputStream(), Usuario.class);
            userName = usuario.getUserName();
            password = usuario.getPassword();
        } catch (IOException e){
            throw new RuntimeException(e);
        }
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName,password);
        return authenticationManager.authenticate(authenticationToken);
    }
    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException{
        //Obtencion del usuario
        org.springframework.security.core.userdetails.User user=(org.springframework.security.core.userdetails.User)authResult.getPrincipal();
        //Obtengo el username
        String username = user.getUsername();
        Usuario usuario = usuarioRepository.findByUserName(username).orElse(null);

        // Calcula si es admin (ajusta según tu modelo de roles)
        boolean isAdmin = usuario != null && usuario.getRoles().stream()
                .anyMatch(role -> role.getName().equalsIgnoreCase("ROLE_ADMIN"));

        // Obtengo los roles
        Collection<? extends GrantedAuthority> roles = authResult.getAuthorities();

        // Se añade los roles y el username a los claims que se agregaran al token
        Claims claims = Jwts.claims()
                .add("authorities", new ObjectMapper().writeValueAsString(roles))
                .add("username", username)
                .build();

        // Genero un token con la llave secreta y le añado los datos
        String token = Jwts.builder().subject(username)
                .claims(claims)
                .expiration(new Date(System.currentTimeMillis() + 3600000)) // fecha de expiracion
                .issuedAt(new Date()) // la fecha actual
                .signWith(SECRET_KEY).compact();

        // Construye el body con los nuevos datos
        Map<String, String> body = new HashMap<>();
        body.put("token", token);
        body.put("username", username);
        if (usuario != null) {
            body.put("id", String.valueOf(usuario.getId()));
            body.put("admin", String.valueOf(isAdmin));
        }
        body.put("message", String.format("Hola %s has iniciado sesion con exito", username));

        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setContentType(CONTENT_TYPE);
        response.setStatus(200);
    }
    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request,HttpServletResponse response, AuthenticationException failed) throws IOException,ServletException{
        Map<String, String> body = new HashMap<>();
        body.put("message", "Error al iniciar sesion nombre de usuario o contraseña incorrectos");
        body.put("error", failed.getMessage());

        response.getWriter().write(new ObjectMapper().writeValueAsString(body));
        response.setContentType(CONTENT_TYPE);
        response.setStatus(401);
    }
}
