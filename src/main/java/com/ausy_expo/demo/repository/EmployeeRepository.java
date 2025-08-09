package com.ausy_expo.demo.repository;

import com.ausy_expo.demo.model.Employee;
import com.ausy_expo.demo.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByBranch(Branch branch);
}
