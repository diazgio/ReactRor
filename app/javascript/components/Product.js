import React from 'react';

const Product = ({ product }) => {
  const { name, price, description } = product;
  return (
    <div className="product">
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;