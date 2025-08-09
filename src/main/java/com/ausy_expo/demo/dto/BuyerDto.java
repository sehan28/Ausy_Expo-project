package com.ausy_expo.demo.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class BuyerDto {
    private Long id;

    @NotBlank
    private String companyName;

    @Email
    private String email;

    @NotBlank
    private String contactNumber;

    @NotBlank
    private String country;
}
