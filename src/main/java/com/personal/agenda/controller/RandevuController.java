package com.personal.agenda.controller;

import com.personal.agenda.model.Randevu;
import com.personal.agenda.repository.RandevuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/randevu")
public class RandevuController {

    @Autowired
    private RandevuRepository randevuRepository;

    @GetMapping
    public List<Randevu> getAllRandevu() {
        return randevuRepository.findAll();
    }

    @GetMapping("/{id}")
    public Randevu getRandevuById(@PathVariable Long id) {
        return randevuRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Randevu createRandevu(@RequestBody Randevu randevu) {
        return randevuRepository.save(randevu);
    }

    @PutMapping("/{id}")
    public Randevu updateRandevu(@PathVariable Long id, @RequestBody Randevu randevuDetails) {
        Randevu randevu = randevuRepository.findById(id).orElse(null);
        if (randevu != null) {
            randevu.setUserId(randevuDetails.getUserId());
            randevu.setStartDate(randevuDetails.getStartDate());
            randevu.setEndDate(randevuDetails.getEndDate());
            randevu.setDescription(randevuDetails.getDescription());
            randevu.setTitle(randevuDetails.getTitle());
            randevu.setLocation(randevuDetails.getLocation());
            randevu.setReminderSettings(randevuDetails.getReminderSettings());
            return randevuRepository.save(randevu);
        } else {
            return null;
        }
    }

    @DeleteMapping("/{id}")
    public void deleteRandevu(@PathVariable Long id) {
        randevuRepository.deleteById(id);
    }
}