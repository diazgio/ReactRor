import React, { useState, useEffect } from 'react';
import CountDown from './CountDown';
import Product from './Product';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <CountDown />
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </>
  );
}

export default App;