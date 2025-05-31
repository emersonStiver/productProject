package com.products.products_service.controller;

import com.products.products_service.controller.dto.ProductDto;
import com.products.products_service.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
    public ProductDto addProduct(@RequestBody  ProductDto product) {
        return productService.createProduct(product);
    }

    @GetMapping("/getAll")
    public List<ProductDto> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/get/{id}")
    public ProductDto getProductById(@PathVariable("id") Long id) {
        return null;
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProductById(@PathVariable("id") String id) {
         this.productService.deleteProduct(id);
    }

    @PutMapping("/update/{id}")
    public ProductDto updateProductById(@PathVariable("id") Long id, @RequestBody ProductDto product) {
        return this.productService.updateProduct(product, id);
    }

}
