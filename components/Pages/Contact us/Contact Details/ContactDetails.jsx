import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import foodImg from '../../../../assets/img/h-food.png';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineEnvironment } from 'react-icons/ai';
import RotatedImage from '../../../Template/RotatedImage';
import { sendPostRequest } from '../../../../functions/sendPostRequest';
import '../../../../assets/styles/contact-details.css';

export default function ContactDetails() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const states = [name, email, phone, subject, message];
  const regex = /^[^0-9+\-*.\/]*$/;
  const emailRegex = /^\S+@\S+\.\S+$/;
  const reloadPage = () => window.location.reload();
  const contactDetailsCard = [
    {
      title: 'Phone',
      contact: '+1 817-901-3377, +1 817-901-3376',
      img: <AiOutlinePhone className='fs-2' />
    },
    {
      title: 'Email',
      contact: 'info@example.com',
      img: <AiOutlineMail className='fs-2' />
    },
    {
      title: 'Adress',
      contact: 'AT&T Software LLC, 4500 Mercantile plaza',
      img: <AiOutlineEnvironment className='fs-2' />
    },
  ];
  const postData = {
    "Name": name,
    "Email": email,
    "Phone": phone,
    "Subject": subject,
    "Message": message
  };

  const renderInputs = (typeOfInput, placeholder, text, state, setState) => {
    return (
      <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type={typeOfInput}
          placeholder={placeholder}
          value={state}
          onChange={setState}
          className='contact-details-inputs'
        />
        <label className='inputs-text' htmlFor="floatingInputCustom">{text}</label>
      </Form.Floating>
    )
  }

  const responseSentSuccessfully = (response) => {
    if (response.status === 201) {
      alert('Your message has been sent successfully!');
      reloadPage();
    }
  }

  const handleSendMessage = () => {
    if (states.some(state => state.trim().length === 0 || !regex.test(name) || !emailRegex.test(email))) {
      setDisplayError(true)
    } else if (name.length < 4 || phone.length < 6) {
      setDisplayError(true)
    } else {
      setDisplayError(false)
      sendPostRequest('http://localhost:3003/messages', postData, responseSentSuccessfully);
    }
  }

  return (
    <section className="contact-details">
      <Row className='w-100 m-0'>
        <Col sm={0} lg={3} className='contact-details-left-col d-sm-none d-lg-flex justify-content-center'>
          <div>
            <RotatedImage img={foodImg} />
          </div>
        </Col>
        <Col sm={12} lg={9} className='pt8 ps-2'>
          <Row>
            <Col sm={12} lg={4}>
              {
                contactDetailsCard.map((item, index) => {
                  return (
                    <Col className='contact-details-card d-flex bg-light p-2 mb-5' key={index}>
                      <div className="card-icon d-flex justify-content-center align-items-center">
                        {item.img}
                      </div>
                      <div className="card-text ms-3">
                        <h5>{item.title}</h5>
                        <h6>{item.contact}</h6>
                      </div>
                    </Col>
                  )
                })
              }
            </Col>
            <Col sm={12} lg={7} className='contact-details-form ms4 p-4'>
              <Row className='mb-3'>
                <h2>Send Message Us</h2>
              </Row>

              <Row>
                <Col>
                  {
                    renderInputs(
                      'text',
                      'Name',
                      'Name',
                      name,
                      (event) => setName(event.target.value))
                  }
                </Col>
                <Col>
                  {
                    renderInputs(
                      'text',
                      'Email',
                      'Email',
                      email,
                      (event) => setEmail(event.target.value))
                  }
                </Col>
              </Row>

              <Row>
                <Col>
                  {
                    renderInputs(
                      'number',
                      'Phone',
                      'Phone',
                      phone,
                      (event) => setPhone(event.target.value))
                  }
                </Col>
                <Col>
                  {
                    renderInputs(
                      'text',
                      'Subject',
                      'Subject',
                      subject,
                      (event) => setSubject(event.target.value))
                  }
                </Col>
              </Row>

              <Row className='mb-3'>
                <Col>
                  <FloatingLabel controlId="floatingTextarea2" label='Message' className='container-textarea'>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: '100px' }}
                      className='contact-details-textarea'
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <div
                    className='mb-2 text-danger'
                    style={{ display: displayError ? 'block' : 'none' }}>
                    Please ensure that all input fields are filled out correctly.
                  </div>
                  <Button
                    className='inputs-button border-0 p-3'
                    size='lg'
                    variant="primary"
                    onClick={handleSendMessage}
                    type='button'>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row >
    </section >
  )
}