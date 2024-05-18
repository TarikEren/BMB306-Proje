package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    @PostMapping
    public String processPayment(@RequestBody String paymentDetails) {
        // PAYMENT MANTIĞI
        return "Payment successful";
    }
}
