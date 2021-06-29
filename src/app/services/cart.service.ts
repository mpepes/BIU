import { Injectable } from '@angular/core';
import { CartItemModel } from "../models/cartItem.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items: CartItemModel[]
  public itemsChange: Subject<CartItemModel[]> = new Subject<CartItemModel[]>()

  constructor() {
    this.items = []
    this.itemsChange.subscribe(value => {
      this.items = value
    })
  }

  addItem(item: CartItemModel): void {
    const itemAlreadyInCart = this.items.find(i => i.id === item.id)

    if (itemAlreadyInCart) {
      const newItems = this.items.map(i => (
        i.id !== item.id
          ? i
          : {
            ...item,
            quantity: item.quantity + i.quantity,
          }
      ))

      this.itemsChange.next(newItems)
      return
    }

    const newItems = [...this.items, item]
    this.itemsChange.next(newItems)
  }

  removeItem(id: number): void {
    const newItems = this.items.filter(i => i.id !== id)
    this.itemsChange.next(newItems)
  }
}
