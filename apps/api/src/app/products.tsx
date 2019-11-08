import { Express } from 'express';
import { Product } from '@nx-monorepo-sample/data';

const products: Product[] = [
  {
    id: 1,
    title:
      'Razor X Cruiser Electric Skateboard with Wireless 2.4 GHz Remote - Black',
    image:
      'https://s.catch.com.au/images/product/0025/25766/5d96f32ccba35108889336_w300.jpg',
    price: 34.99,
    inStock: true
  },
  {
    id: 1,
    title: 'Birkenstock Arizona Unisex Regular Fit Sandals - Dark Brown',
    image:
      'https://s.catch.com.au/images/product/0002/2012/58a4e4993be38264924111_w300.jpg',
    price: 148,
    inStock: true
  },
  {
    id: 1,
    title: 'Paws & Claws Catsby Double Platform Hideaway Tower - Cream',
    image:
      'https://s.catch.com.au/images/product/0025/25766/5d96f32ccba35108889336_w300.jpg',
    price: 99.99,
    inStock: false
  }
];

export function addProductRoutes(app: Express) {
  app.get('/api/products', (req, resp) => resp.send(products));
}
