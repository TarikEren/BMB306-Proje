package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @GetMapping
    public String getSubscriptionPlans() {
        // sub planları burda
        return "List of subscription plans";
    }

    @PostMapping("/{userId}")
    public String subscribeUser(@PathVariable Long userId, @RequestBody String plan) {
        // userı plana bağla
        return "Subscription successful";
    }
}
