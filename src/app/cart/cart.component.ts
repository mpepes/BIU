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

  get total(): number {
    return this.cartService.items.reduce((totalCount, item) => (
      totalCount + (item.quantity * item.price)
    ), 0)
  }

  removeItem = (e) => {
    const id = +e.target.dataset.itemid
    this.cartService.removeItem(id)
  }
}
