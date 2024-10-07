import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import deliveryImg from '../../../../assets/img/delivery.png';
import hightQualityImg from '../../../../assets/img/quality-assurance.png';
import fastFoodImg from '../../../../assets/img/fast-food.png';
import timeImg from '../../../../assets/img/back-in-time.png';
import chef from '../../../../assets/img/chef-ab.png';
import '../../../../assets/styles/promotional-offer-section.css'

export default function PromotionalOfferSection() {
  const promotionalCol = (title, img) => {
    return (
      <Col sm={12} xl={6} className='promotional-offer-col d-flex mb-3 mt-2'>
        <Image className='column-img me-3' src={img} />
        <div className="column-text">
          <h4>{title}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipis.</p>
        </div>
      </Col>
    )
  }

  return (
    <section className='promotional-offer'>
      <Row className='m-0'>
        <Col className='promotional-offer-text offset-1 pt5'>
          <h6 className='text-uppercase mb-3'>SAVE UP TO 25% TODAY</h6>
          <h3 className='mb-3'>New details special for your car 25% Discount</h3>
          <p className='mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <Row>
            {promotionalCol('With Free Delivery', deliveryImg)}
            {promotionalCol('Highest quality', hightQualityImg)}
            {promotionalCol('A varied menu', fastFoodImg)}
            {promotionalCol('Save your time', timeImg)}
          </Row>
        </Col>
        <Col className='promotional-offer-r-col'>
          <Image src={chef} />
        </Col>
      </Row>
    </section >
  )
}