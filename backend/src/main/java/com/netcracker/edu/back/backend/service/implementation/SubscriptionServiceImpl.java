package com.netcracker.edu.back.backend.service.implementation;

import com.netcracker.edu.back.backend.entity.BillingAccount;
import com.netcracker.edu.back.backend.entity.Product;
import com.netcracker.edu.back.backend.entity.Subscription;
import com.netcracker.edu.back.backend.repository.SubscriptionRepository;
import com.netcracker.edu.back.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @Override
    public void deleteAllByBillingAccountIn(BillingAccount billingAccount) {
        subscriptionRepository.deleteAllByBillingAccountIn(billingAccount);
    }

    @Override
    public void deleteAllByProduct(Product product) {
        subscriptionRepository.deleteAllByProductIn(product);
    }

    @Override
    public Integer countAllByProduct(Product product) {
        return subscriptionRepository.countAllByProduct(product);
    }

    @Override
    public List<Subscription> findAll() {
        return (List<Subscription>)subscriptionRepository.findAll();
    }

    @Override
    public List<Subscription> getTopFourSubs() {
        return subscriptionRepository.getTopFourSubs();
    }

    @Override
    public List<Subscription> getAllByBillingAccount(BillingAccount billingAccount) {
        return subscriptionRepository.getAllByBillingAccount(billingAccount);
    }

    @Override
    public List<Subscription> getAllByBillingAccountIn(List<BillingAccount> billingAccounts) {
        return subscriptionRepository.getAllByBillingAccountIn(billingAccounts);
    }

    @Override
    public Subscription save(Subscription subscription) {
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription checkSub(Product product, List<BillingAccount> billingAccounts) {
        return subscriptionRepository.getByProductAndBillingAccountIn(product, billingAccounts);
    }

    @Override
    public Optional<Subscription> findById(int id) {
        return subscriptionRepository.findById(id);
    }

    @Override
    public void delete(Subscription sub) {
        subscriptionRepository.delete(sub);
    }
}
