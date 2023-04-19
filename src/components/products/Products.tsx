import React, { useState, useEffect } from 'react';
import { CardForProduct } from '../Cards/CardForProduct';

interface Tproduct {
  id: string;
  title: string;
  price: string;
  image: string;
}

export default function Products() {
  const [products, setProducts] = useState<Tproduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch(`https://fakestoreapi.com/products`);
        const data = await resp.json();
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log('Error');
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <h1 className='section-title'> All Products</h1>
      <div className='card-body'>
        {isLoading ? (
          <div>...Loading</div>
        ) : (
          <ul className='cards'>
            {products.map((product, index) => {
              return (
                <CardForProduct
                  key={index}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.image}
                />
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
