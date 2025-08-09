package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Vehicle;
import java.util.List;

public interface VehicleService {
    Vehicle createVehicle(Vehicle vehicle);
    Vehicle updateVehicle(Long id, Vehicle vehicle);
    void deleteVehicle(Long id);
    Vehicle getVehicleById(Long id);
    List<Vehicle> getAllVehicles();
}