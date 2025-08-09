package com.ausy_expo.demo.controller;

import com.ausy_expo.demo.model.Job;
import com.ausy_expo.demo.service.JobService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@RequiredArgsConstructor
public class JobController {

    private final JobService jobService;

    @GetMapping
    public List<Job> getAll() {
        return jobService.getAllJobs();
    }

    @GetMapping("/{id}")
    public Job getById(@PathVariable Long id) {
        return jobService.getJobById(id);
    }

    @PostMapping
    public Job create(@RequestBody Job job) {
        return jobService.createJob(job);
    }

    @PutMapping("/{id}")
    public Job update(@PathVariable Long id, @RequestBody Job job) {
        return jobService.updateJob(id, job);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        jobService.deleteJob(id);
    }
}
