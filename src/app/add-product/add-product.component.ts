import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
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
