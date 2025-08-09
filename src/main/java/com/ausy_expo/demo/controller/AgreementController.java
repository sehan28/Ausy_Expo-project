package com.ausy_expo.demo.controller;

import com.ausy_expo.demo.model.Agreement;
import com.ausy_expo.demo.service.AgreementService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agreements")
@RequiredArgsConstructor
public class AgreementController {

    private final AgreementService agreementService;

    @GetMapping
    public List<Agreement> getAll() {
        return agreementService.getAllAgreements();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Agreement> getById(@PathVariable Long id) {
        return ResponseEntity.ok(agreementService.getAgreementById(id));
    }

    @PostMapping
    public Agreement create(@RequestBody Agreement agreement) {
        return agreementService.createAgreement(agreement);
    }

    @PutMapping("/{id}")
    public Agreement update(@PathVariable Long id, @RequestBody Agreement agreement) {
        return agreementService.updateAgreement(id, agreement);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        agreementService.deleteAgreement(id);
    }
}
