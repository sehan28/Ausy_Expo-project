package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Agreement;
import com.ausy_expo.demo.model.Supplier;
import com.ausy_expo.demo.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AgreementRepository extends JpaRepository<Agreement, Long> {
    List<Agreement> findBySupplier(Supplier supplier);
    List<Agreement> findByBuyer(Buyer buyer);
    List<Agreement> findByEndDateBefore(LocalDate date);  // for expired agreement checks

    List<Agreement> findByEndDateBetween(LocalDate endDateAfter, LocalDate endDateBefore);


}
