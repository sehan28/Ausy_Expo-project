package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Vehicle;
import com.ausy_expo.demo.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByBranch(Branch branch);
    List<Vehicle> findByAvailable(boolean available);
}
