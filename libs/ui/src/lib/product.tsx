import React from 'react';
import { Product } from '@nx-monorepo-sample/data';

import './product.css';

export const ProductComponent = (props: { products: Product[] }) => {
  return (
    <div>
      <div className="row">
        {props.products.map((product, i) => (
          <div className="card" key={i}>
            <img src={product.image} />
            <p>{product.title}</p>
            <div className="price">{product.price}</div>
            <button className="btn">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
