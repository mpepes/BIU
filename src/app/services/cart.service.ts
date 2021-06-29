import { Injectable } from '@angular/core';
import { CartItemModel } from "../models/cartItem.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items?: CartItemModel[]

  constructor() {
    this.items = [
      {
        description: 'desc 1',
        id: 1,
        imgUrl: '',
        name: 'Mover',
        price: 100,
        quantity: 3,
      },
      {
        description: 'desc 2',
        id: 2,
        imgUrl: '',
        name: 'Saw',
        price: 200,
        quantity: 3,
      },
    ]
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
    console.log(this.items)
  }
}
