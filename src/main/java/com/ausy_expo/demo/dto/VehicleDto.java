package com.ausy_expo.demo.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VehicleDto {
    private Long id;

    @NotBlank
    private String vehicleNumber;

    @NotBlank
    private String description;

    private boolean available;

    private Long branchId;
}
