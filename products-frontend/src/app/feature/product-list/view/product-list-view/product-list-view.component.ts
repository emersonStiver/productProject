import { Component } from '@angular/core';
import { ProductService } from '../../../../shared/product.service';
import { Product } from '../../../../core/models/product-models';
import { NgClass, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list-view',
  imports: [NgClass, FormsModule, NgIf],
  template: `
    <div class="max-w-screen-lg mx-auto ">
      <h1 class="text-2xl font-semibold text-gray-800 mb-2">Product List</h1>
      <p class="text-gray-600 mb-6">Browse all available products below.</p>
      <table
        class="w-full rounded-lg text-sm text-gray-700 bg-white overflow-hidden "
      >
        <thead class="bg-blue-500 text-white">
          <tr>
            <th class="text-center py-3 px-4 font-medium">Name</th>
            <th class="text-center py-3 px-4 font-medium">Description</th>
            <th class="text-center py-3 px-4 font-medium">Price</th>
            <th class="text-center py-3 px-4 font-medium">Quantity</th>
          </tr>
        </thead>
        <tbody>
          @for (item of items; track $index) {
          <tr
            (click)="openModal(item)"
            class="hover:bg-blue-100 duration-200 transition hover:cursor-pointer"
            [ngClass]="{
              'bg-gray-100': $index % 2 === 0,
              'bg-white': $index % 2 !== 0
            }"
          >
            <td class="p-4 text-center align-middle">{{ item.productName }}</td>
            <td class="p-4 text-center align-middle">{{ item.description }}</td>
            <td class="p-4 text-center align-middle">{{ item.price }}</td>
            <td class="p-4 text-center align-middle">{{ item.quantity }}</td>
          </tr>
          }
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div
      *ngIf="selectedProduct"
      class="fixed inset-0 flex items-center justify-center"
      style="background-color: rgba(0, 0, 0, 0.5);"
    >
      <div class="bg-white rounded-lg p-6 w-96 relative">
        <h2 class="text-xl font-semibold mb-4">Edit Product</h2>

        <label class="block mb-2">Name</label>
        <input
          [(ngModel)]="selectedProduct.productName"
          class="border p-2 w-full mb-4"
          type="text"
        />

        <label class="block mb-2">Description</label>
        <input
          [(ngModel)]="selectedProduct.description"
          class="border p-2 w-full mb-4"
          type="text"
        />

        <label class="block mb-2">Price</label>
        <input
          [(ngModel)]="selectedProduct.price"
          class="border p-2 w-full mb-4"
          type="number"
          min="0"
        />

        <label class="block mb-2">Quantity</label>
        <input
          [(ngModel)]="selectedProduct.quantity"
          class="border p-2 w-full mb-4"
          type="number"
          min="0"
        />

        <div class="flex justify-between">
          <button
            class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            (click)="deleteProduct()"
          >
            Delete
          </button>

          <button
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            (click)="updateProduct()"
          >
            Update
          </button>

          <button class="px-4 py-2 rounded border" (click)="closeModal()">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
})
export class ProductListViewComponent {
  items: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => (this.items = data),
      error: (err) => console.error('Error fetching products:', err),
    });
  }

  openModal(product: Product) {
    // Create a copy to avoid editing the list item directly before saving
    this.selectedProduct = { ...product };
  }

  closeModal() {
    this.selectedProduct = null;
  }

  updateProduct() {
    if (!this.selectedProduct) return;

    this.productService.updateProduct(this.selectedProduct).subscribe({
      next: (updated) => {
        console.log('Product updated:', updated);
        this.loadProducts(); // refresh list
        this.closeModal();
      },
      error: (err) => console.error('Error updating product:', err),
    });
  }

  deleteProduct() {
    if (!this.selectedProduct) return;

    this.productService.deleteProduct(this.selectedProduct.id!).subscribe({
      next: () => {
        console.log('Product deleted');
        this.loadProducts(); // refresh list
        this.closeModal();
      },
      error: (err) => console.error('Error deleting product:', err),
    });
  }
}
