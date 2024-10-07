import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { BsDashSquareFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import ShoppingCartModal from './ShoppingCartModal';
import emptyShoppingCart from '../../assets/img/empty-cart.svg';
import '../../assets/styles/shopping-cart.css';

export default function ShoppingCart(props) {
  const [iconVisible, setIconVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [modalActive, setModalActive] = useState(false);

  const productsPrice = props.products.reduce((totalPrice, product) => {
    return totalPrice + (product.initialPrice * product.count);
  }, 0);

  const handleClose = () => {
    setShow(false);
    setIconVisible(true);
  };

  const handleShow = () => {
    setShow(true);
    setIconVisible(false);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("shopping-cart", JSON.stringify(props.products));
  };

  const handleIncrement = (product) => {
    product.count += 1;
    setQuantity(product.count);
    updateLocalStorage();
  };

  const handleDecrement = (product) => {
    if (product.count > 1) {
      product.count -= 1;
      setQuantity(product.count);
      updateLocalStorage();
    }
  };

  const handleRemove = (productToRemove) => {
    const newProducts = props.products.filter((product) => product !== productToRemove);
    props.setProducts(newProducts);
  };

  return (
    <div className="shopping-cart d-flex align-items-center" style={{ backgroundColor: show ? '#eae7e7' : '#ffffff' }}>
      <Container className='container-lg' fluid>
        <Row className='w-100'>
          <Col className='d-flex justify-content-start'>
            <div className='d-flex mt7'>
              {iconVisible ?
                <BsArrowUpCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleShow} /> :
                <BsArrowDownCircle className='fs-3 me-3 color-yellow shopping-cart-icon mt-1' onClick={handleClose} />
              }
              <div className="shopping-cart-orders shopping-cart-text-color">
                {
                  props.products.length <= 1 ? `Your Order(${props.products.length})` : `Your Orders(${props.products.length})`
                }
              </div>
            </div>
          </Col>

          <Col className='d-flex justify-content-end p-0'>
            <div className="shopping-cart-price mt7">
              Total: <b>{productsPrice.toFixed(2) + '$'}</b>
            </div>
            <div>
              <Button className='shopping-cart-button ms-3 px-4 d-none d-md-block text-white' variant="warning" onClick={() => setModalActive(true)}>Buy</Button>
              <div className='d-block d-md-none h-100 ms-2'>
                <BsFillCartFill className='fs-3 color-yellow' />
              </div>
            </div>
          </Col>

          <Offcanvas className='shopping-cart-products px8' show={show} onHide={handleClose} backdrop={false} placement='bottom'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className='shopping-cart-text-color'>
                Order Details
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              {
                props.products.length === 0 &&
                <Row className='justify-content-center'>
                  <Image className='empty-img' src={emptyShoppingCart} />
                </Row>
              }

              {
                props.products.map((product, index) => {
                  return (
                    <Row key={index} className='w-100 d-flex align-items-center mb-4 products-row p-3'>
                      <Col>
                        <Image className='shoping-cart-img' src={product.productImage} />
                      </Col>
                      <Col>
                        <h6 className='shopping-cart-text-color'>{product.productName}</h6>
                      </Col>
                      <Col>
                        <h6 className='shopping-cart-text-color'>{product.initialPrice + '$'}</h6>
                      </Col>
                      <Col>
                        <h6 className='shopping-cart-text-color'>{`Quantity(${product.count})`}</h6>
                      </Col>
                      <Col className='d-flex justify-content-center'>
                        <BsDashSquareFill onClick={() => handleDecrement(product)} className='fs-4 me-2 cart-icon' />
                        <BsFillPlusSquareFill onClick={() => handleIncrement(product)} className='fs-4 me-2 cart-icon' />
                        <BsTrash onClick={() => handleRemove(product)} className='fs-4 cart-icon' />
                      </Col>
                    </Row>
                  )
                })
              }

            </Offcanvas.Body>
          </Offcanvas>

        </Row>
      </Container>
      <ShoppingCartModal
        show={modalActive}
        close={() => setModalActive(false)}
        totalPrice={productsPrice}
      />
    </div >
  )
}
