import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import fastDeliveryImg from '../../../../assets/img/handshake-1.png';
import dishImg from '../../../../assets/img/dish-1.png';
import discountVoucherImg from '../../../../assets/img/discount-voucher.png';
import ladiesNightImg from '../../../../assets/img/ladies-night.png';
import balloonImg from '../../../../assets/img/balloon.png';
import dinningTableImg from '../../../../assets/img/dinning-table.png';
import barrierImg from '../../../../assets/img/barrier.png';
import birthdayCakeImg from '../../../../assets/img/birthday-cake.png';
import '../../../../assets/styles/services-offered-section.css';

export default function ServicesOfferedSection() {
  const servicesOfferedCard = (number, title, img) => {
    return (
      <Col>
        <div className='option-card p-4 pb-5 mb-3 bg-light services-offered-card'>
          <div className='d-flex justify-content-between mb-3'>
            <Image className='services-offered-img' src={img} />
            <h2 className='option-card-number'>{number}</h2>
          </div>
          <h3 className='option-card-title text-center mb-3'>{title}</h3>
          <p className='card-text text-left'>
            Lorem Ipsum is simply dummy text of the printing and type setting industry.
          </p>
          <Link className='card-link' to='#'>Read More...</Link>
        </div>
      </Col>
    )
  }

  return (
    <section className="services-offered mt-4">
      <Row className='m-0'>
        <Col className='services-offered-col position-relative'>
          <h4 className='text-uppercase mb-3'>INNOVATIVE</h4>
          <h2 className='mb-4'>Any Day, Any Time//</h2>
          <Row className='w-100'>
            {servicesOfferedCard(1, 'Fast Delivery', fastDeliveryImg)}
            {servicesOfferedCard(2, 'Various Details', dishImg)}
            {servicesOfferedCard(3, 'Discount Voucher', discountVoucherImg)}
            {servicesOfferedCard(4, 'Night Work', ladiesNightImg)}
          </Row>
          <Row className='w-100 mt-2'>
            {servicesOfferedCard(5, 'Charity Events', balloonImg)}
            {servicesOfferedCard(6, 'Private Consultation', dinningTableImg)}
            {servicesOfferedCard(7, 'Party Clients', barrierImg)}
            {servicesOfferedCard(8, 'Birthay Discount', birthdayCakeImg)}
          </Row>
        </Col>
      </Row>
    </section >
  )
}