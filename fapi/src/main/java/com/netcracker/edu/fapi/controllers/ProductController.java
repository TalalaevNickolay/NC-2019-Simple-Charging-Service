package com.netcracker.edu.fapi.controllers;

import com.netcracker.edu.fapi.dto.Product;
import com.netcracker.edu.fapi.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/get_all", method = RequestMethod.GET)
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @RequestMapping(value = "/get_top_4", method = RequestMethod.GET)
    public List<Product> getTopFourProducts(){
        return productService.getTopFourProducts();
    }

    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    public ResponseEntity<Product> getProductById(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok(productService.getProductById(id));
    }
}