import React from 'react';
import storeItems from '../Data/products.json';
import { Item } from './item';

export const ItemList = () => {
  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};
