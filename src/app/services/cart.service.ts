import { Injectable } from '@angular/core';
import { CartItemModel } from "../models/cartItem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items?: CartItemModel[]

  constructor() { }

  getItems(): CartItemModel[] | undefined {
    return this.items
  }

  addItem(item: CartItemModel): void {
    this.items.push(item)
  }

  removeItem(id: number): void {
    this.items = this.items.filter(i => i.id !== id)
  }
}
