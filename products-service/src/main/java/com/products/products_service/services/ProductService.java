package com.products.products_service.services;


import com.products.products_service.controller.dto.ProductDto;
import com.products.products_service.models.Product;

import java.util.List;

public interface ProductService {
    public List<ProductDto> getAllProducts();
    public List<ProductDto> getProduct(String id);
    public ProductDto createProduct(ProductDto product);
    public ProductDto updateProduct(ProductDto product, Long id);
    public Boolean deleteProduct(String id);
}
