package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Agreement;
import java.util.List;

public interface AgreementService {
    Agreement createAgreement(Agreement agreement);
    Agreement updateAgreement(Long id, Agreement agreement);
    Agreement getAgreementById(Long id);
    List<Agreement> getAllAgreements();
    void deleteAgreement(Long id);
}