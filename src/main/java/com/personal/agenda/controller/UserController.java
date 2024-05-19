package com.personal.agenda.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{id}")
    public User getUserDetails(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PutMapping("/{id}")
    public User updateUserDetails(@PathVariable Long id, @RequestBody User userDetails) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            //Yeni kullanıcı adı daha önceden alınmadıysa değiştir
            user.setUsername(userDetails.getUsername());
            user.setPassword(userDetails.getPassword());
            user.setAccountType(userDetails.getAccountType());
            return userRepository.save(user);
        }
        return null;
    }

    @PutMapping("/{id}/change-password")
    public User changePassword(@PathVariable Long id, @RequestBody String newPassword) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            user.setPassword(newPassword);
            return userRepository.save(user);
        }
        return null;
    }
}
