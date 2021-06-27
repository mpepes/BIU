import { Component, OnInit } from '@angular/core';
import { ProductModel } from "../models/product.model";
import { ProductsService } from "../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: ProductModel[]

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts()
  }
}
