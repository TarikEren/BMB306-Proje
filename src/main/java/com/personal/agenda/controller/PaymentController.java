package com.personal.agenda.controller;

import org.springframework.web.bind.annotation.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.personal.agenda.model.PaymentDetails;
import com.personal.agenda.model.PaymentDetails.PaymentValidation;

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

    private String extractUserIdFromPaymentDetails(String paymentDetails) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            PaymentDetails details = objectMapper.readValue(paymentDetails, PaymentDetails.class);
            return details.getUserId();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    // Ödeme detaylarını doğrulayan yöntem
    private boolean validatePaymentDetails(String paymentDetails) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            PaymentDetails details = objectMapper.readValue(paymentDetails, PaymentDetails.class);
            
            return PaymentValidation.isValidCardNumber(details.getCardNumber()) &&
                   PaymentValidation.isValidExpirationDate(details.getExpirationDate()) &&
                   PaymentValidation.isValidCVV(details.getCvv());
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    // Ödeme işlemini gerçekleştiren yöntem
        private boolean processPayment(String userId, String paymentDetails) {
        // Ödeme işleme mantığı
        return true; // Örnek dönüş değeri
    }   

    // Kullanıcıyı premium yapan yöntem
    private void updateUserToPremium(String userId) {
        // Kullanıcı veritabanı erişimini sağlayan bir sınıfın örneğini oluşturun
        UserDatabaseManager userDBManager = new UserDatabaseManager(); // Örnek bir sınıf adı
    
        // Kullanıcının premium durumunu güncelle
        boolean success = userDBManager.updateUserPremiumStatus(userId, true);
    
        if (success) {
            System.out.println("User " + userId + " has been upgraded to premium.");
        } else {
            System.out.println("Failed to upgrade user " + userId + " to premium.");
        }
    }
}
