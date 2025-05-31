import { Routes } from '@angular/router';
import { ProductFormViewComponent } from './feature/product-form/view/product-form-view/product-form-view.component';
import { ProductListViewComponent } from './feature/product-list/view/product-list-view/product-list-view.component';
import { AppComponent } from './app.component';
import { ProductLayoutComponent } from './feature/product-layout/product-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductLayoutComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ProductListViewComponent },
      { path: 'form', component: ProductFormViewComponent },
    ],
  },
];