package com.dwes.ApiRestBackEnd.config;

import com.dwes.ApiRestBackEnd.config.filter.JwtAuthenticationFilter;
import com.dwes.ApiRestBackEnd.config.filter.JwtValidationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class SpringSecurityConfig {

    private AuthenticationConfiguration authenticationConfiguration;

    @Autowired
    public SpringSecurityConfig(AuthenticationConfiguration authenticationConfiguration){
        this.authenticationConfiguration = authenticationConfiguration;
    }

    @Bean
    AuthenticationManager authenticationManager() throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        return http.authorizeHttpRequests((authz)->authz
                .requestMatchers(HttpMethod.GET,"/producto").permitAll()
                        .requestMatchers(HttpMethod.GET,"/usuario").permitAll()
                        .requestMatchers(HttpMethod.POST,"/usuario/registro").permitAll()
                        .requestMatchers(HttpMethod.POST,"/usuario").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST,"/producto").hasRole("ADMIN")
                .anyRequest().authenticated())
                .addFilter(new JwtAuthenticationFilter(authenticationManager()))
                .addFilter(new JwtValidationFilter(authenticationManager()))
                .csrf(config-> config.disable())
                .cors(cors->cors.configurationSource(corsConfigurationSource()))
                .sessionManagement(management->management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(){
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOriginPatterns(Arrays.asList("*"));
        config.setAllowedMethods(Arrays.asList("GET","POST","DELETE","PUT"));
        config.setAllowedHeaders((Arrays.asList("Authorization","Content-Type")));
        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    @Bean
    FilterRegistrationBean<org.springframework.web.filter.CorsFilter> corsFilter(){
        FilterRegistrationBean<org.springframework.web.filter.CorsFilter> corsBean = new FilterRegistrationBean<>(
                new org.springframework.web.filter.CorsFilter(corsConfigurationSource()));
        corsBean.setOrder(Ordered.HIGHEST_PRECEDENCE);
        return corsBean;
    }
}