import { useState, useEffect } from 'react';

export function useShoppingCart() {
  const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("shopping-cart")) || []);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    }
    setProductsInCart([...productsInCart, newProduct]);
  }

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart))
  }, [productsInCart]);

  return { productsInCart, setProductsInCart, addProductToCart };
}