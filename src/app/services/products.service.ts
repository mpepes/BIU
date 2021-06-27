import { Injectable } from '@angular/core';
import { ProductModel } from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: ProductModel[]

  constructor() {
    this.products = [
      {
        name: 'Mover',
        imgUrl: 'https://www.mediaexpert.pl/media/cache/gallery/product/1/999/0/322/vkepe1ef/images/21/2114065/Kosiarka-elektryczna-NAC-MEX32-E12-N-bok-prawy-2.jpg',
        description: 'description 1',
        price: 100,
        id: 1,
      },
      {
        name: 'Saw',
        imgUrl: 'https://www.sklep.staltech.pl/environment/cache/images/0_0_productGfx_3984/Pila-reczna-do-drewna---platnica.jpg',
        description: 'description 2',
        price: 200,
        id: 2,
      },
    ]
  }

  getProducts(): ProductModel[] {
    return this.products
  }

  getProductById(id: number): ProductModel | undefined {
    return this.products.find(p => p.id === id)
  }
}
