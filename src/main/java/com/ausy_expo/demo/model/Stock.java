package com.ausy_expo.demo.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String type; // "garment" or "packaging"

    @NotBlank
    private String materialName;

    @Min(0)
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private Branch branch;
}
