# 📦 Entregable - Aplicación de Gestión de Productos (Frontend + Backend)

---

Este proyecto es una aplicación completa para la gestión de productos, compuesta por un **frontend** desarrollado con Angular y un **backend** implementado en Java con Spring Boot y MySQL.

## 📁 Parte 1: Frontend (Angular)

---

Este módulo frontend fue desarrollado utilizando **Angular Standalone Components** y cuenta con navegación por rutas. La aplicación presenta dos vistas principales:

### 📌 Vistas implementadas:

* **Lista de productos (`/list`):**
    Muestra una tabla con todos los productos disponibles. Permite seleccionar un producto para editarlo o eliminarlo.

    *(Espacio para pantallazo de la vista)*

* **Formulario de producto (`/form`):**
    Permite registrar un nuevo producto. El formulario incluye validaciones para los campos: **nombre, descripción, precio y cantidad**.

    *(Espacio para pantallazo de la vista)*

### 🧭 Ruteo de la aplicación:

---

```typescript
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
```

---

### Product Layout and Backend API

The **`ProductLayoutComponent`** acts as the main layout, housing the navigation and a `<router-outlet>` that dynamically loads other views.

---

## 📁 Parte 2: Backend (Java + Spring Boot + MySQL)

The backend, built with Java and Spring Boot, exposes a REST API for CRUD operations on products. The supported operations are:

* **`GET /products/getAll`** – Retrieve all products
* **`GET /products/getById/{id}`** – Get a product by its ID
* **`POST /products/add`** – Add a new product
* **`PUT /products/update`** – Update an existing product
* **`DELETE /products/delete/{id}`** – Delete a product by ID

---

### Database Connection

The application connects to a MySQL database using the following connection URL:

```bash
jdbc:mysql://localhost:3306/product_database
```

Antes de ejecutar el backend, asegúrate de tener una instancia de MySQL corriendo y haber creado una base de datos con el nombre: product_database
