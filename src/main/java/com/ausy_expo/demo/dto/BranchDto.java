package com.ausy_expo.demo.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BranchDto {
    private Long id;

    @NotBlank
    private String name;

    @NotBlank
    private String location;
}
