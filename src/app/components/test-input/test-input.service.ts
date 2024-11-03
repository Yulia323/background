import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Paradise',
      price: 1200,
      description: 'Минеральная пудра',
      image: 'assets/images/pudra.jpg',
      category: 'Продукты для лица'
    },
    {
      id: 2,
      name: 'Rose',
      price: 590,
      description: 'Крем для лица',
      image: 'assets/images/cream.jpg',
      category: 'Продукты для лица'
    },
    {
      id: 3,
      name: 'Earth',
      price: 299,
      description: 'Бомбочка для ванны',
      image: 'assets/images/bath-bomb.jpg',
      category: 'Продукты для тела'
    },
    {
      id: 4,
      name: 'Coconut',
      price: 690,
      description: 'Масло для тела',
      image: 'assets/images/body-oil.jpg',
      category: 'Продукты для тела'
    },
    {
      id: 5,
      name: 'High',
      price: 999,
      description: 'Крем для кожи вокруг глаз',
      image: 'assets/images/face-cream.jpg',
      category: 'Продукты для лица'
    },
    {
      id: 6,
      name: 'Lotos',
      price: 1200,
      description: 'Маска для лица',
      image: 'assets/images/face-mask.jpg',
      category: 'Продукты для лица'
    },
    {
      id: 7,
      name: 'Lavender',
      price: 560,
      description: 'Мыло ручной работы',
      image: 'assets/images/soap.jpg',
      category: 'Продукты для тела'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product: Product) => product.id === id);
  }
}
export enum Catalog {
  All = 'Все',
  Face = 'Продукты для лица',
  Body = 'Продукты для тела'
}
