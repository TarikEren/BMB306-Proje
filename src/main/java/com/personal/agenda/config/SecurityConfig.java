package com.personal.agenda.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig {

    // PasswordEncoder bean tanımı
    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCryptPasswordEncoder kullanarak şifreleri şifreleyeceğiz
        return new BCryptPasswordEncoder();
    }
}