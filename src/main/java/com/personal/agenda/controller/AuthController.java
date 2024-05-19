package com.personal.agenda.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        // BURAYA LOGİN LOGİC KOYMANIZ LAZIM
        // Gelen formu kontrol et.
        // Girdiler doğruysa (Eksik girdi) veritabanından kullanıcı adını ve şifreyi kontrol et.
        // Aynı anda ikisini de içeren hesap varsa giriş yap.
        return "Login successful";
    }
}
