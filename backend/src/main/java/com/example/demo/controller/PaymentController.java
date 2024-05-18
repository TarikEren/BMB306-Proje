package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @PostMapping
    public String processPayment(@RequestBody String paymentDetails) {
        // PAYMENT MANTIĞI
        // Ödemeyi yapan kullanıcıyı al.
        // Gelen formu kontrol et.
        // Bilgiler doğruysa kullanıcıyı premium yap.
        return "Payment successful";
    }
}
