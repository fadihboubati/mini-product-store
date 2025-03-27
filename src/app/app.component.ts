import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { CartComponent } from "./cart/cart.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HomeComponent, AddProductComponent, CartComponent, DashboardComponent],
})
export class AppComponent {
  title = 'product-store';

  // Function to get the current page from the URL
  getCurrentPage(): string {
    return window.location.pathname;
  }
}
