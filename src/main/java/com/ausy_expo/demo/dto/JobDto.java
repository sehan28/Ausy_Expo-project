package com.ausy_expo.demo.dto;

import com.ausy_expo.demo.model.enums.JobStatus;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;

@Data
public class JobDto {
    private Long id;

    @NotBlank
    private String description;

    private JobStatus status;

    private LocalDate createdAt;

    private LocalDate deadline;

    private Long managerId;
}
