package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Branch;
import java.util.List;

public interface BranchService {
    Branch createBranch(Branch branch);
    Branch updateBranch(Long id, Branch branch);
    void deleteBranch(Long id);
    Branch getBranchById(Long id);
    List<Branch> getAllBranches();
}
