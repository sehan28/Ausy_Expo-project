package com.ausy_expo.demo.service.impl;

import com.ausy_expo.demo.model.Branch;
import com.ausy_expo.demo.repository.BranchRepository;
import com.ausy_expo.demo.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BranchServiceImpl implements BranchService {

    @Autowired
    private BranchRepository branchRepository;

    @Override
    public Branch createBranch(Branch branch) {
        return branchRepository.save(branch);
    }

    @Override
    public Branch updateBranch(Long id, Branch branch) {
        Branch existing = branchRepository.findById(id).orElseThrow(() -> new RuntimeException("Branch not found"));
        existing.setName(branch.getName());
        existing.setLocation(branch.getLocation());
        return branchRepository.save(existing);
    }

    @Override
    public void deleteBranch(Long id) {
        branchRepository.deleteById(id);
    }

    @Override
    public Branch getBranchById(Long id) {
        return branchRepository.findById(id).orElseThrow(() -> new RuntimeException("Branch not found"));
    }

    @Override
    public List<Branch> getAllBranches() {
        return branchRepository.findAll();
    }
}
