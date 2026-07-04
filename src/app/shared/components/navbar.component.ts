import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Ecom</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" routerLink="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="product">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="cart">Cart</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `,
  styles: ``,
})
export class Navbar {}
