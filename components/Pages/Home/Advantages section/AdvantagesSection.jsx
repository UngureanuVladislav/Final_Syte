import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import RotatedImage from '../../../Template/RotatedImage';
import imgFood from '../../../../assets/img/side-img.png';
import imgDelicious from '../../../../assets/img/y-Delicious.png';
import '../../../../assets/styles/advantages-section.css';

export default function AdvantagesSection() {
  const createCard = () => {
    return (
      <Col className='d-flex justify-content-center'>
        <Card className='mb-4 cards' style={{ width: '14rem' }}>
          <Card.Img className='cards-img position-relative' variant="top" src={imgDelicious} />
          <Card.Body>
            <Card.Title className='cards-title text-center'>Details Idustry</Card.Title>
            <Card.Text className='text-center cards-text'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }

  return (
    <Container fluid>
      <Row className='advantage-section w-100'>
        <Col className='advantage-left-col d-flex justify-content-center' sm={12} md={4}>
          <Row>
            {createCard()}
            {createCard()}
            {createCard()}
            {createCard()}
          </Row>
        </Col>
        <Col className='advantage-col-center position-relative' sm={12} md={8}>
          <h6 className='mb-4'>Why Chose Us</h6>
          <h2 className='mb-4'>Many Reason For Choosing CarIndustry</h2>
          <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <p className='last-paragraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
          <div className='img-r'>
            <RotatedImage img={imgFood} width='20%' bottom='30px' right='30px' position='absolute' />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
