import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { sendPostRequest } from '../../../../functions/sendPostRequest';
import '../../../../assets/styles/table-reservation-section.css';

import reservationSectionImg from '../../../../assets/img/reservation-section-img.jpg';

export default function TableReservationSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [partyType, setPartyType] = useState('');
  const [numberOfPerson, setNumberOfPerson] = useState('');
  const [date, setDate] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const states = [name, phone, partyType, numberOfPerson, date];
  const regex = /^[^0-9+\-*.\/]*$/;
  const postData = {
    "Name": name,
    "Phone number": phone,
    "Party Type": partyType,
    "Number of Person": numberOfPerson,
    "Date": date
  };

  const reloadPage = () => window.location.reload();

  const responseSentSuccessfully = (response) => {
    if (response.status === 201) {
      alert('You have successfully reserved your place!');
      reloadPage();
    }
  }

  const renderInputs = (typeOfInput, placeholder, text, state, setState) => {
    return (
      <Form.Floating className="mb-4">
        <Form.Control
          id="floatingInputCustom"
          type={typeOfInput}
          placeholder={placeholder}
          value={state}
          onChange={setState}
          className='inputs'
        />
        <label className='inputs-text' htmlFor="floatingInputCustom">{text}</label>
      </Form.Floating>
    )
  }

  const handleBookButton = () => {
    if (states.some(state => state.trim().length === 0) || !regex.test(name) || new Date(date) < new Date()) {
      setDisplayError(true);
    } else if (name.length < 4 || phone.length < 6 || partyType === 'Select party type') {
      setDisplayError(true);
    } else {
      setDisplayError(false);
      sendPostRequest('http://localhost:3003/tableReservation', postData, responseSentSuccessfully);
    }
  };

  return (
    <Container fluid>
      <Row className='reservation-section'>
        <Col sm={12} md={7} className='col-left position-relative'>
          <div className='d-sm-block d-md-none'>
            <Image src={reservationSectionImg} fluid />
          </div>
        </Col>
        <Col sm={12} md={5} className='col-right'>
          <div className='reservation-section-img'>
            <Row>
              <Col className='reservation-section-form'>
                <h2 className='mb-3'>Reserve Your Time</h2>
                {
                  renderInputs(
                    'text',
                    'input your name',
                    'Name',
                    name,
                    (event) => setName(event.target.value))
                }
                {
                  renderInputs(
                    'number',
                    'input your phone',
                    'Phone',
                    phone,
                    (event) => setPhone(event.target.value))
                }
                <FloatingLabel className='mb-4' controlId="floatingSelect" label="Party Type">
                  <Form.Select
                    className='inputs'
                    onChange={(event) => setPartyType(event.target.value)}
                    aria-label="Floating label select example">
                    <option>Select problem</option>
                    <option value="Probleme cu motorul">Probleme cu motorul</option>
                    <option value="Probleme suspensie">Probleme suspensie</option>
                    <option value="Reanoirea salonului"> Reanoirea salonului</option>
                    <option value="Vopsirea unui element">Vopsirea unui element</option>
                    <option value="Vopsirea masinii">Vopsirea masinii</option>
                    <option value="Defect electric ">Defect electric</option>
                  </Form.Select>
                </FloatingLabel>
                {
                  renderInputs(
                    'number',
                    'input your number',
                    'Person',
                    numberOfPerson,
                    (event) => setNumberOfPerson(event.target.value))
                }
                {
                  renderInputs('date',
                    'input date',
                    'Date',
                    date,
                    (event) => setDate(event.target.value))
                }
                <div
                  className='mb-3 text-danger'
                  style={{ display: displayError ? 'block' : 'none' }}>
                  Please ensure that all input fields are filled out correctly.
                </div>
                <Row>
                  <Button
                    className='inputs-button p-3 border-0'
                    size='lg'
                    variant="primary"
                    onClick={handleBookButton}
                    type='button'>
                    Book Now!
                  </Button>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container >
  )
}
