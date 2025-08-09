package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Buyer;

import java.util.List;

public interface BuyerService {
    List<Buyer> getAllBuyers();
    Buyer getBuyerById(Long id);
    Buyer createBuyer(Buyer buyer);
    Buyer updateBuyer(Long id, Buyer buyer);
    void deleteBuyer(Long id);
}
