import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/product-card.css'

export default function productCard(props) {
  const saleIcon = props.saleIcon ? <div
    className="sale-icon position-absolute d-flex justify-content-center align-items-center">
    Sale!
  </div> : null

  return (
    <Card className='product-card position-relative' style={{ width: '16.8rem' }}>
      <Card.Img className='product-img' variant="top" src={props.productImage} />
      <Card.Body>
        <Card.Title className='product-card-title'>{props.cardTitle}</Card.Title>
        <Card.Text className='product-card-description'>{props.cardDescription}</Card.Text>
        <div className='product-price mb-2 mt-3 d-flex'>
          <h6 className='product-card-text-underline'>{props.oldPrice}</h6>
          <h6 className='product-card-text mx-2'>{props.price}</h6>
        </div>
        <Button className='product-card-button' variant="warning" onClick={props.addProduct}>Add to cart</Button>
        {saleIcon}
      </Card.Body>
    </Card>
  )
}
<p></p>