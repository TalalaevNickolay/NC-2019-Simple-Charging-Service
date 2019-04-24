package com.netcracker.edu.fapi.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    boolean storeProductImage(MultipartFile file);
    Resource getProductImage(String name);

    boolean storeUserImage(MultipartFile file);
    Resource getUserImage(String name);
}