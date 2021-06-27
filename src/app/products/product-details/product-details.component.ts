import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { ProductModel } from "../../models/product.model";
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product?: ProductModel
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id'))
    this.product = this.productsService.getProductById(id)
  }

  addItemToCart = () => {
    const quantity = 1
    const item = this.productsService.getProductById(this.product.id)
    this.cartService.addItem({
      ...item,
      quantity,
    })
  }
}
