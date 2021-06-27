import { Component } from '@angular/core';
import { ProductModel } from "../models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public products: ProductModel[]

  constructor() {
    this.products = [
      {
        name: 'Mover',
        imgUrl: 'https://www.mediaexpert.pl/media/cache/gallery/product/1/999/0/322/vkepe1ef/images/21/2114065/Kosiarka-elektryczna-NAC-MEX32-E12-N-bok-prawy-2.jpg',
        description: 'description 1',
        price: 100,
      },
      {
        name: 'Saw',
        imgUrl: 'https://www.sklep.staltech.pl/environment/cache/images/0_0_productGfx_3984/Pila-reczna-do-drewna---platnica.jpg',
        description: 'description 2',
        price: 200,
      },
    ]
  }
}
