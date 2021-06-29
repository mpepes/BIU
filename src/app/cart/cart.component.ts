import { Component, OnInit } from '@angular/core';
import { CartService } from "../services/cart.service";
import { CartItemModel } from "../models/cartItem.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public items: CartItemModel[]

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems()
  }

  removeItem = (e) => {
    const id = +e.target.dataset.itemid
    this.cartService.removeItem(id)
  }
}
