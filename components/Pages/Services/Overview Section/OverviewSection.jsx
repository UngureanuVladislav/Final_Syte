import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import cookImg from '../../../../assets/img/ser-ab.png';
import '../../../../assets/styles/overview-section.css';

export default function OverviewSection() {
  return (
    <section className="overview">
      <Container>
        <Row>
          <Col sm={12} lg={6}>
            <Image src={cookImg} fluid />
          </Col>
          <Col className='overview-text' sm={12} lg={6}>
            <h2 className='mb-3'>CarIndustry is your dream.</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
