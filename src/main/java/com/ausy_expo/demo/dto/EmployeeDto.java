package com.ausy_expo.demo.dto;

import com.ausy_expo.demo.model.enums.Department;
import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class EmployeeDto {
    private Long id;

    @NotBlank
    private String name;

    @Min(18)
    private int age;

    @NotBlank
    private String contactNumber;

    @NotNull
    private Department department;

    private Long branchId;

    @PositiveOrZero
    private double salary;
}
