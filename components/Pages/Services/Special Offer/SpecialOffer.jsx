import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import plateImg from '../../../../assets/img/food-plate-3 (1).png';
import RotatedImage from '../../../Template/RotatedImage';
import '../../../../assets/styles/special-offer.css';

export default function SpecialOffer() {
  return (
    <section className="special-offer">
      <Row className='m-0'>
        <Col sm={12} md={6} className='promotional-offer-text special-offer-left-col pt5'>
          <h6 className='text-uppercase mb-3'>SAVE UP TO 25% TODAY</h6>
          <h3 className='mb-3'>With CarIndustry you will have 25% Discount</h3>
          <p className='mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.</p>
        </Col>
        <Col sm={0} md={3} className='d-sm-none d-xl-flex justify-content-center'>
          <div className='special-offer-center-col'>
            <RotatedImage width='302px' height='287px' marginTop='15%' img={plateImg} />
          </div>
        </Col>
        <Col sm={0} md={3} className='special-offer-right-col offset-sm-3 offset-xl-0' />
    </Row>
    </section >
  )
}
