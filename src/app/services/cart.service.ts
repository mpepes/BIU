import { Injectable } from '@angular/core';
import { CartItemModel } from "../models/cartItem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items?: CartItemModel[]

  constructor() {
    this.items = []
  }

  getItems(): CartItemModel[] | undefined {
    return this.items
  }

  addItem(item: CartItemModel): void {
    this.items.push(item)
    console.log(this.items)
  }

  removeItem(id: number): void {
    this.items = this.items.filter(i => i.id !== id)
  }
}
