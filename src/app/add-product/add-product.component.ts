import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  imports: [CommonModule, FormsModule],

})
export class AddProductComponent {
  newProduct = { title: '', price: 0, image: '' };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.newProduct).subscribe(response => {
      console.log('Product added:', response);
    });
  }
}
