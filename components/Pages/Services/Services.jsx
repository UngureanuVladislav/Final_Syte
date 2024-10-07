import React from 'react';
import PageHeader from '../../Template/PageHeader';
import OverviewSection from './Overview Section/OverviewSection';
import ServicesOfferedSection from './Services Offered Section/ServicesOfferedSection';
import SpecialOffer from './Special Offer/SpecialOffer';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import ShoppingCart from '../../Template/ShoppingCart';

export default function Services() {
  const { productsInCart, setProductsInCart } = useShoppingCart();

  return (
    <>
      <PageHeader textContent='Services' />
      <OverviewSection />
      <ServicesOfferedSection />
      <SpecialOffer />
      <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
    </>
  )
}