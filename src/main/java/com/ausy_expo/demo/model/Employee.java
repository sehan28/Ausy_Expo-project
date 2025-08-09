package com.ausy_expo.demo.model;

import com.ausy_expo.demo.model.enums.Department;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String name;

    @Enumerated(EnumType.STRING)
    private Department department;

    @Min(18)
    private int age;

    @NotBlank
    private String contactNumber;

    @ManyToOne
    @JoinColumn(name = "branch_id")
    private Branch branch;

    private double salary;
}
