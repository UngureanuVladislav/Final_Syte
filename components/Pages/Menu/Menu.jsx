import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { BiSearch } from "react-icons/bi";
import ProductCard from '../../Template/ProductCard';
import PageHeader from '../../Template/PageHeader';
import { useShoppingCart } from '../../../hooks/useShoppingCart';
import { productsData } from '../../../data/data';
import ShoppingCart from '../../Template/ShoppingCart';
import '../../../assets/styles/menu.css';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('Pizza');
  const [activeCategory, setActiveCategory] = useState(category);
  const [inputValue, setInputValue] = useState('');
  const { productsInCart, setProductsInCart, addProductToCart } = useShoppingCart();

  const sendGetRequest = (link) => {
    axios
      .get(link)
      .then(productsData => setProducts(productsData.data[category]))
      .catch(() => setProducts(productsData[category]));
  };

  const categoryClick = (categoryName) => {
    setCategory(categoryName);
    setActiveCategory(categoryName);
  };

  const categoryList = (categoryName) => {
    return (
      <li
        className={activeCategory === categoryName ? 'active-category' : ''}
        onClick={() => categoryClick(categoryName)}>{categoryName}
      </li>
    )
  };

  const filteredProducts = products.filter(product => {
    return (product.productName.toLowerCase().includes(inputValue.toLowerCase()));
  });

  useEffect(() => {
    sendGetRequest(`http://localhost:3001/products`);
  }, [category]);

  return (
    <>
      <PageHeader textContent='Menu' />
      <Container>
        <Row className='culinary-section w-100 mt6'>
          <Col className='mb-4' sm={12} md={3}>
            <ul className='text-center'>
              {categoryList('Motor')}
              {categoryList('Salon')}
              {categoryList('Suspensie')}
              {categoryList('Caroserie')}
              {categoryList('Jante')}
              {categoryList('Accesorii')}
            </ul>
          </Col>
          <Col sm={12} md={9}>
            <Row>
              <Form className="d-flex w-100 position-relative">
                <Form.Control
                  type="text"
                  placeholder={`Search ${category}`}
                  className='culinary-section-search'
                  aria-label="Search"
                  onInput={(event) => setInputValue(event.target.value)}
                />
                <BiSearch className='fs-5 position-absolute search-icon' />
              </Form>
            </Row>
            <Row className='mt-5 ms-sm-0 ms-lg-2'>
              {
                filteredProducts.map((product, index) => {
                  return (
                    <Col className='mb-4 culinary-section-product' key={index}>
                      <ProductCard
                        cardTitle={product.productName}
                        cardDescription={product.productDescription}
                        productImage={product.productImage}
                        price={product.initialPrice + '$'}
                        addProduct={() => addProductToCart(product)}
                      />
                    </Col>
                  )
                })
              }
            </Row>
          </Col>
        </Row>
      </Container >
      <ShoppingCart products={productsInCart} setProducts={setProductsInCart} />
    </>
  )
}