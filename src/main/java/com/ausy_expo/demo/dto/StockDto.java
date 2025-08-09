package com.ausy_expo.demo.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class StockDto {
    private Long id;

    @NotBlank
    private String type;

    @NotBlank
    private String materialName;

    @Min(0)
    private int quantity;

    private Long branchId;
}
