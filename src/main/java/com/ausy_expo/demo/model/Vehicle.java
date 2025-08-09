package com.ausy_expo.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String vehicleNumber;

    @NotBlank
    private String description;

    private boolean available = true;

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private Branch branch;
}
