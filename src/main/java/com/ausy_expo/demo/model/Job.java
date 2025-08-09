package com.ausy_expo.demo.model;

import com.ausy_expo.demo.model.enums.JobStatus;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String description;

    @Enumerated(EnumType.STRING)
    private JobStatus status = JobStatus.PENDING;

    private LocalDate createdAt = LocalDate.now();

    private LocalDate deadline;

    @ManyToOne
    @JoinColumn(name = "assigned_to")
    private User manager;
}
