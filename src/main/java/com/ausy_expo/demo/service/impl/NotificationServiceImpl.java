package com.ausy_expo.demo.service.impl;

import com.ausy_expo.demo.model.Agreement;
import com.ausy_expo.demo.repository.AgreementRepository;
import com.ausy_expo.demo.service.NotificationService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService {

    private final AgreementRepository agreementRepository;

    // This runs daily at 8 AM
    @Scheduled(cron = "0 0 8 * * ?")
    @Transactional
    public void notifyExpiringAgreements() {
        LocalDate today = LocalDate.now();
        LocalDate in7Days = today.plusDays(7);

        List<Agreement> expiringAgreements = agreementRepository.findByEndDateBetween(today, in7Days);

        for (Agreement agreement : expiringAgreements) {
            // Simulate sending a notification
            log.info("Agreement ID {} is expiring on {}", agreement.getId(), agreement.getEndDate());

            // You can replace this with actual email or in-app notification logic
        }
    }
}
