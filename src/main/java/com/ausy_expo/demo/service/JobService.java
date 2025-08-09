package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Job;
import java.util.List;

public interface JobService {
    Job createJob(Job job);
    Job updateJob(Long id, Job job);
    void deleteJob(Long id);
    Job getJobById(Long id);
    List<Job> getAllJobs();
}