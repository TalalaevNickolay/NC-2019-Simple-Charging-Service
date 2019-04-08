package com.netcracker.edu.back.backend.service;

import com.netcracker.edu.back.backend.entity.BillingAccount;

import java.util.Optional;

public interface BillingAccountService {
    BillingAccount save(BillingAccount billingAccount);
    BillingAccount finById(Long id);
}