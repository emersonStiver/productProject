package com.products.products_service;

import com.products.products_service.controller.dto.ProductDto;
import com.products.products_service.models.Product;
import com.products.products_service.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ProductsServiceApplication {

	@Autowired
	private ProductService productService;

	public static void main(String[] args) {
		SpringApplication.run(ProductsServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(ProductService productService) {
		return args -> {
			productService.createProduct(ProductDto.builder()
					.productName("Zapato")
					.description("Zapato de cuero elegante")
					.quantity("10")
					.price("1000")
					.build());

			productService.createProduct(ProductDto.builder()
					.productName("Camisa")
					.description("Camisa de algodón manga larga")
					.quantity("25")
					.price("750")
					.build());

			productService.createProduct(ProductDto.builder()
					.productName("Laptop")
					.description("Laptop ultrabook con 16GB RAM")
					.quantity("5")
					.price("15000")
					.build());

			productService.createProduct(ProductDto.builder()
					.productName("Audífonos")
					.description("Audífonos inalámbricos con cancelación de ruido")
					.quantity("30")
					.price("1200")
					.build());

			productService.createProduct(ProductDto.builder()
					.productName("Mochila")
					.description("Mochila resistente al agua para portátil")
					.quantity("20")
					.price("950")
					.build());

			productService.createProduct(ProductDto.builder()
					.productName("Silla Gamer")
					.description("Silla ergonómica con soporte lumbar")
					.quantity("8")
					.price("4500")
					.build());
		};
	}


}
