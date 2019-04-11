package com.netcracker.edu.back.backend.controller;

import com.netcracker.edu.back.backend.entity.Product;
import com.netcracker.edu.back.backend.entity.Subscription;
import com.netcracker.edu.back.backend.service.ProductService;
import com.netcracker.edu.back.backend.service.SubscriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;
    @Autowired
    private SubscriptionService subscriptionService;

    @RequestMapping(value = "/get_all", method = RequestMethod.GET)
    public List<Product> getAllProducts(){
        return productService.findAll();
    }

    @RequestMapping(value = "/get_top_4", method = RequestMethod.GET)
    public List<Product> getTopFourProducts(){
        List<Product> products = new ArrayList<>();
        ArrayList<Subscription> subscriptions = (ArrayList<Subscription>)subscriptionService.getTopFourSubs();
        if(subscriptions.size() == 0){
            products = productService.findAll();
            if(products.size() >= 4) products = products.subList(0,4);
        }else {
            if(subscriptions.size() < 4){
                for (Subscription sub: subscriptions) {
                    products.add(sub.getProduct());
                }
            }else {
                for (int i = 0; i < 4; i++) {
                    products.add(subscriptions.get(i).getProduct());
                }
            }
        }
        return products;
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public Optional<Product> getAllProducts(@PathVariable(name = "id") Integer id){
        return productService.getProductById(id);
    }
}
