package com.ausy_expo.demo.service;

import com.ausy_expo.demo.model.Supplier;
import java.util.List;

public interface SupplierService {
    Supplier createSupplier(Supplier supplier);
    Supplier updateSupplier(Long id, Supplier supplier);
    void deleteSupplier(Long id);
    Supplier getSupplierById(Long id);
    List<Supplier> getAllSuppliers();
}