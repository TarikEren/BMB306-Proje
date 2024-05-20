package com.personal.agenda.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payment")
public class PaymentController {

@PostMapping
public String processPayment(@RequestBody String paymentDetails) {
    // 1. Ödemeyi Yapan Kullanıcıyı Al
    String userId = extractUserIdFromPaymentDetails(paymentDetails);

    // 2. Gelen Formu Kontrol Et
    if (!validatePaymentDetails(paymentDetails)) {
        return "Payment failed: Invalid payment details";
    }

    // 3. Bilgiler Doğruysa Kullanıcıyı Premium Yap
    if (processPayment(userId, paymentDetails)) {
        updateUserToPremium(userId);
        return "Payment successful";
    } else {
        return "Payment failed: Processing error";
    }
  }
}
