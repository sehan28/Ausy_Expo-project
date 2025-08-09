package com.ausy_expo.demo.service.impl;

import com.ausy_expo.demo.model.Buyer;
import com.ausy_expo.demo.repository.BuyerRepository;
import com.ausy_expo.demo.service.BuyerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BuyerServiceImpl implements BuyerService {

    private final BuyerRepository buyerRepository;

    @Override
    public List<Buyer> getAllBuyers() {
        return buyerRepository.findAll();
    }

    @Override
    public Buyer getBuyerById(Long id) {
        return buyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Buyer not found with ID: " + id));
    }

    @Override
    public Buyer createBuyer(Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @Override
    public Buyer updateBuyer(Long id, Buyer updatedBuyer) {
        Buyer existingBuyer = buyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Buyer not found with ID: " + id));

        existingBuyer.setCompanyName(updatedBuyer.getCompanyName());
        existingBuyer.setEmail(updatedBuyer.getEmail());
        existingBuyer.setContactNumber(updatedBuyer.getContactNumber());
        existingBuyer.setCountry(updatedBuyer.getCountry());

        return buyerRepository.save(existingBuyer);
    }

    @Override
    public void deleteBuyer(Long id) {
        if (!buyerRepository.existsById(id)) {
            throw new RuntimeException("Buyer not found with ID: " + id);
        }
        buyerRepository.deleteById(id);
    }
}
