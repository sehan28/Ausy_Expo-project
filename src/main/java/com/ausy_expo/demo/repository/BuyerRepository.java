package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<Buyer, Long> {

}
