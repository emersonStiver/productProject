import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <div class="p-4 bg-gray-100 min-h-screen">
      <nav class="mb-6 flex gap-4">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          routerLink="/list"
          routerLinkActive="bg-blue-700"
        >
          Product List
        </button>
        <button
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          routerLink="/form"
          routerLinkActive="bg-green-700"
        >
          Add Product
        </button>
      </nav>

      <router-outlet></router-outlet>
    </div>
  `,
})
export class ProductLayoutComponent {}
