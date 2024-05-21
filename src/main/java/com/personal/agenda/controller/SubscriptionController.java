package com.personal.agenda.controller;

import com.personal.agenda.model.SubscriptionPlan;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@RestController
@RequestMapping("/subscriptions")
public class SubscriptionController {

    @GetMapping
    public List<SubscriptionPlan> getSubscriptionPlans() {
        // Subscription planlarını bir veritabanından veya başka bir kaynaktan al.
        List<SubscriptionPlan> plans = fetchSubscriptionPlans();

        // Planları JSON formatında döndür.
        return plans;
    }

    @PostMapping("/{userId}")
    public String subscribeUser(@PathVariable Long userId, @RequestBody String planId) {
        // Planı veritabanından veya başka bir kaynaktan al.
        SubscriptionPlan plan = getSubscriptionPlanById(planId);

        // Kullanıcıyı plana abone et.
        subscribeUserToPlan(userId, plan);

        // Başarılı mesajı döndür.
        return "Subscription successful";
    }
    
    private List<SubscriptionPlan> fetchSubscriptionPlans() {
        // ... (Subscription planlarını alma mantığı)
        return new ArrayList<>();
    }

    private SubscriptionPlan getSubscriptionPlanById(String planId) {
        // ... (Planı ID'ye göre alma mantığı)
        return new SubscriptionPlan();
    }

    private void subscribeUserToPlan(Long userId, SubscriptionPlan plan) {
        // ... (Kullanıcıyı plana abone etme mantığı)
    }
}
