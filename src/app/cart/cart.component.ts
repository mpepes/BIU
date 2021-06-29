import { Component } from '@angular/core';
import { CartService } from "../services/cart.service";
import { CartItemModel } from "../models/cartItem.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get items(): CartItemModel[] {
    return this.cartService.items
  }

  removeItem = (e) => {
    const id = +e.target.dataset.itemid
    this.cartService.removeItem(id)
  }
}
