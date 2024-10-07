import React from 'react';
import PageHeader from '../../Template/PageHeader';
import ContactDetails from './Contact Details/ContactDetails';
import Map from './Map/Map';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import ShoppingCart from '../../Template/ShoppingCart';

export default function Contact() {
  const { productsInCart, setProductsInCart } = useShoppingCart();
  
  return (
    <>
      <PageHeader textContent='Contact Us' />
      <ContactDetails />
      <Map />
      <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
    </>
  )
}
