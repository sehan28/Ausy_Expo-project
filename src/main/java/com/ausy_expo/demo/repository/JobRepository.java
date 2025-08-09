package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Job;
import com.ausy_expo.demo.model.User;
import com.ausy_expo.demo.model.enums.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    List<Job> findByManager(User manager);
    List<Job> findByStatus(JobStatus status);
}
