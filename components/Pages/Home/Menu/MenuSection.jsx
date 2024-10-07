import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import ProductCard from '../../../Template/ProductCard';
import hTag from '../../../../assets/img/h-tag.png';
import leftLine from '../../../../assets/img/y-left-s.png';
import rightLine from '../../../../assets/img/y-right-s.png';
import { useShoppingCart } from '../../../../hooks/useShoppingCart';
import ShoppingCart from '../../../Template/ShoppingCart';
import { productsData } from '../../../../data/data';
import '../../../../assets/styles/menu-section.css';

export default function MenuSection() {
  const [products, setProducts] = useState([]);
  const { productsInCart, setProductsInCart, addProductToCart } = useShoppingCart();

  useEffect(() => {
    axios
      .get('http://localhost:3001/products')
      .then(productsData => setProducts(productsData.data.discounts))
      .catch(() => setProducts(productsData.discounts));
  }, [])

  return (
    <section className="menu-section">
      <Container className='container-lg' fluid>
        <div className='d-flex flex-column align-items-center mt-2 menu-section-text-container'>
          <Row>
            <h2 className='text-center'>Check Our Details</h2>
          </Row>
          <Row className='mb-2'>
            <p className='text-center menu-section-text text-white mt-2'>Lorem ipsum dolor sit amet consectetur adipiscing
              elit do eiusmod tempor incididunt ut labore.</p>
          </Row>
          <Row className='menu-section-figure mb-5'>
            <Col className='d-flex align-items-center'>
              <Image src={leftLine} />
            </Col>
            
            <Col className='d-flex align-items-center'>
              <Image src={rightLine} />
            </Col>
          </Row>
        </div>
        <Row className='men-section-card'>
          {
            products.slice(0, 4).map((product, index) => {
              return (
                <Col className='mb10 d-flex justify-content-center' key={index}>
                  <ProductCard
                    cardTitle={product.productName}
                    productImage={product.productImage}
                    oldPrice={product.previousPrice + '$'}
                    price={product.initialPrice + '$'}
                    addProduct={() => addProductToCart(product)}
                    saleIcon='true' />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
    </section>

  )
}