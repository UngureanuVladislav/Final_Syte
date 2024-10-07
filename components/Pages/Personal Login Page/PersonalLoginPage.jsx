import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import '../../../assets/styles/personal-login-page.css';

export default function PersonalLoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [displayError, setDisplayError] = useState(false);

  const states = [username, password];

  const handleRegistration = (event) => {
    const isValid = states.every(state => state.trim() !== '' && state === 'admin');
    isValid ?
      window.location.replace(`dashboard/${Math.floor(Math.random() * 100)}`) :
      setDisplayError(true);
  }

  return (
    <section className="personal-login-page">
      <Container className='d-flex justify-content-center'>
        <Row className='login rounded-1 bg-white pt-5 w-100 '>
          <Col className='px-4'>
            <h1 className='text-center mb-4'>Login</h1>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-4">
              <Form.Control type="text"
                placeholder="Username"
                value={username}
                onInput={(event) => setUserName(event.target.value)} />
            </FloatingLabel>

            <FloatingLabel className='mb-4' controlId="floatingPassword" label="Password">
              <Form.Control type="password"
                placeholder="Password"
                value={password}
                onKeyDown={handleRegistration}
                onInput={(event) => setPassword(event.target.value)} />
            </FloatingLabel>

            <div className='text-danger mb-3'
              style={{ display: displayError ? 'block' : 'none' }}
            >Enter the correct login and password.</div>

            <Row className='mb-5'>
              <Button className='inputs-button p-3 border-0'
                size='lg' variant="primary"
                type='button'
                onClick={handleRegistration}
              >Login</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}