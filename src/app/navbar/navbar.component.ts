import { Component } from '@angular/core';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartService: CartService) { }

  get totalItemsCount(): number {
    return this.cartService.items.length
  }
}
