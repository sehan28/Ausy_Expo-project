package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Branch;
import com.ausy_expo.demo.model.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Long> {
    List<Stock> findByBranch(Branch branch);
    List<Stock> findByType(String type);
}
