import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../shared/product.service';

@Component({
  selector: 'app-product-form-view',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-2">Add New Product</h1>
      <p class="text-gray-600 mb-6">
        Please fill out the form below to add a new product.
      </p>

      <form [formGroup]="productForm" (ngSubmit)="onSubmit()" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            formControlName="productName"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            formControlName="description"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
            <input
              formControlName="price"
              type="number"
              min="0"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
            <input
              formControlName="quantity"
              type="number"
              min="0"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          class="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Product
        </button>
      </form>
    </div>
  `,
})
export class ProductFormViewComponent {
  constructor(private productService: ProductService) {}

  productForm = new FormGroup({
    productName: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
    quantity: new FormControl<number>(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)],
    }),
  });

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.getRawValue();
      console.log('📦 Submitting product data:', productData);
      this.productService.addProduct(productData).subscribe({
        next: (response) => {
          console.log('✅ Product added successfully:', response);
        },
        error: (error) => {
          console.error('❌ Error adding product:', error);
        },
      });
      this.productForm.reset()
    } else {
      console.error('❌ Form is invalid:', this.productForm.errors);
    }
  }
}
