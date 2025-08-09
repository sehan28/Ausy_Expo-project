package com.ausy_expo.demo.service.impl;

import com.ausy_expo.demo.model.Agreement;
import com.ausy_expo.demo.repository.AgreementRepository;
import com.ausy_expo.demo.service.AgreementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgreementServiceImpl implements AgreementService {
    @Autowired
    private AgreementRepository agreementRepository;

    @Override
    public Agreement createAgreement(Agreement agreement) {
        return agreementRepository.save(agreement);
    }

    @Override
    public Agreement updateAgreement(Long id, Agreement agreement) {
        Agreement existing = agreementRepository.findById(id).orElseThrow();
        existing.setEndDate(agreement.getEndDate());
        existing.setTerms(agreement.getTerms());
        return agreementRepository.save(existing);
    }

    @Override
    public Agreement getAgreementById(Long id) {
        return agreementRepository.findById(id).orElseThrow();
    }

    @Override
    public List<Agreement> getAllAgreements() {
        return agreementRepository.findAll();
    }

    @Override
    public void deleteAgreement(Long id) {
        agreementRepository.deleteById(id);
    }
}