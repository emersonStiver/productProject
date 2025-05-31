package com.products.products_service.controller.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDto {
    private String id;
    private String productName;
    private String price;
    private String quantity;
    private String description;
}
