import { Component } from '@angular/core';
import { Product } from './dto/products';

@Component({
  selector: 'app-products1',
  imports: [],
  templateUrl: './products1.component.html',
  styleUrl: './products1.component.css',
})
export class Products1Component {
  products = [
    new Product(1, 'Angular Book', 100, 5, 20),
    new Product(2, 'Nest Book', 80, 2, 0),
    new Product(3, 'Symfony Book', 55, 0, 0),
    new Product(4, 'Js Book', 120, 20, 30),
  ];
}
