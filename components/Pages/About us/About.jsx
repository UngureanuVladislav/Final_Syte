import React from 'react';
import PageHeader from '../../Template/PageHeader';
import MenuOptionsSection from './Menu Options  Section/MenuOptionsSection';
import OurCompanySection from './Our Company Section/OurCompanySection';
import PromotionalOfferSection from './Promotional Offer/PromotionalOfferSection';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import ShoppingCart from '../../Template/ShoppingCart';

export default function About() {
  const { productsInCart, setProductsInCart } = useShoppingCart();
  
  return (
    <>
      <PageHeader textContent='About Us' />
      <MenuOptionsSection />
      <OurCompanySection />
      <PromotionalOfferSection />
      <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
    </>
  )
}
