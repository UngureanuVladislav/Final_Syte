import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import img1 from '../../../../assets/img/b-1.png';
import img2 from '../../../../assets/img/b-2.png';
import img3 from '../../../../assets/img/b-3.png';
import img4 from '../../../../assets/img/b-4.png';
import '../../../../assets/styles/menu-options-section.css';

export default function MenuOptionsSection() {
  const cards = [
    {
      img: img1,
      title: 'New Details'
    },
    {
      img: img2,
      title: 'Various Details'
    },
    {
      img: img3,
      title: 'Well Service'
    },
    {
      img: img4,
      title: 'Fast Delivery'
    }
  ]

  return (
    <div className="menu-options-section">
      <Container>
        <Row className='pt-10 mb-5'>
          <Col className='text-content' sm={12} md={6}>
            <h6 className='text-uppercase'>INNOVATIVE</h6>
            <h3>Any Day, Any Time//</h3>
          </Col>
          <Col sm={12} md={6}>
            <p className='paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting
            </p>
          </Col>
        </Row>
        <Row className='mb-5'>
          {
            cards.map((card, index) => {
              return (
                <Col key={index}>
                  <div className='option-card p-4 pb-5 mb-3'>
                    <div className='d-flex justify-content-between mb-3'>
                      <Image src={card.img} />
                      <h2 className='option-card-number'>{index + 1}</h2>
                    </div>
                    <h3 className='option-card-title text-center mb-3'>{card.title}</h3>
                    <p className='card-text text-left'>
                      Lorem Ipsum is simply dummy text of the printing and type setting industry.
                    </p>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div >
  )
}