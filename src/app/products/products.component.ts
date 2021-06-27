import { Component, OnInit } from '@angular/core';
// import { ProductModel } from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products;

  constructor() {
    this.products = [
      { name: 'prod 1', imgUrl: '', description: 'description 1' },
      { name: 'prod 2', imgUrl: '', description: 'description 2' },
    ]
  }

  ngOnInit(): void {
  }

}
