package com.personal.agenda.controller;

import com.personal.agenda.model.User;
import com.personal.agenda.repository.UserRepository;
import com.personal.agenda.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // Yeni kullanıcı kaydetme işlemi
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        // Kullanıcının şifresini şifreliyoruz
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // Kullanıcıyı veritabanına kaydediyoruz
        return userRepository.save(user);
    }

    // Kullanıcı giriş işlemi
    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        // Kullanıcıyı kullanıcı adına göre buluyoruz
        User foundUser = userRepository.findByUsername(user.getUsername());
        // Kullanıcı bulundu ve şifre eşleşiyorsa token oluşturup döndürüyoruz
        if (foundUser != null && passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            return jwtUtil.generateToken(foundUser);
        } else {
            // Kullanıcı bulunamazsa veya şifre yanlışsa hata mesajı döndürüyoruz
            return "Login failed";
        }
    }

    // Kullanıcı çıkış işlemi
    @PostMapping("/logout")
    public String logoutUser() {
        // Kullanıcıyı hesaptan çıkarmak için gerekli işlemler (örn. token geçersiz kılma)
        return "Logout successful";
    }
}
