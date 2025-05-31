package com.products.products_service.services.imp;

import com.products.products_service.controller.dto.ProductDto;
import com.products.products_service.models.Product;
import com.products.products_service.repositories.ProductRepository;
import com.products.products_service.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImp implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductDto> getAllProducts() {
        return productRepository.findAll().stream().map(this::matpToProductDto).toList();
    }
    @Override
    public List<ProductDto> getProduct(String id){
        return  productRepository.findById(Long.parseLong(id)).stream().map(this::matpToProductDto).toList();
    }

    @Override
    public ProductDto createProduct(ProductDto productDto){
        System.out.println("Product to save: " + productDto);
        Product p = this.productRepository.save(mapToProduct(productDto));
        System.out.println("Product saved: " + p);
        return matpToProductDto(p);
    }

    @Override
    public ProductDto updateProduct(ProductDto product, Long id){
        Product p = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
        if(p != null){
            Product updatedProduct = updateProduct(p, product);
            return matpToProductDto(productRepository.save(updatedProduct));
        }
        return null;
    }

    @Override
    public Boolean deleteProduct(String id){
        this.productRepository.deleteById(Long.parseLong(id));
        return productRepository.findById(Long.parseLong(id)).isEmpty();
    }

    private Product mapToProduct(ProductDto productDto){
        return Product.builder()
                .productName(productDto.getProductName())
                .description(productDto.getDescription())
                .quantity(productDto.getQuantity())
                .price(productDto.getPrice())
                .build();
    }

    private ProductDto matpToProductDto(Product product){
        return ProductDto.builder()
                .id(String.valueOf(product.getId()))
                .productName(product.getProductName())
                .description(product.getDescription())
                .quantity(product.getQuantity())
                .price(product.getPrice())
                .build();
    }

    private Product updateProduct(Product product, ProductDto productDto){
        System.out.println("Product to udpate: " + productDto);
        product.setProductName(productDto.getProductName());
        product.setDescription(productDto.getDescription());
        product.setQuantity(productDto.getQuantity());
        product.setPrice(productDto.getPrice());
        return product;
    }


}
