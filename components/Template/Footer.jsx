import React from 'react';
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import footerLogo from '../../assets/img/footer-logo.png';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import '../../assets/styles/footer.css';

export default function Footer() {
  return (
    <Row className='footer m-0'>
      <Col xs={12} md={4} className='d-flex justify-content-center'>
        <div className='mb-3'>
          <h3 className='text-uppercase color-yellow mb-3'>explore</h3>
          <div className='d-flex'>
            <ul className='p-0'>
              <li className='mb-3'>
                <Link to='/about' className='footer-text footer-links'>About Us</Link>
              </li>
              <li className='mb-3'>
                <Link to='/about' className='footer-text footer-links'>Menu</Link>
              </li>
              <li>
                <Link to='/about' className='footer-text footer-links'>Contact Us</Link>
              </li>
            </ul>

            <ul className='ms-5 p-0'>
              <li className='mb-3'>
                <Link to='/about' className='footer-text footer-links'>Services</Link>
              </li>
              <li className='mb-3'>
                <Link to='/about' className='footer-text footer-links'>Blogs</Link>
              </li>
              <li>
                <Link to='/about' className='footer-text footer-links'>Refund and Returns Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </Col>

      <Col xs={12} md={4} className='d-flex justify-content-center'>
        <div className='mb-5'>
          <Image src={footerLogo} fluid />
          <div className="text-container mt-3">
            <p className='footer-text'>
              <span className='color-yellow'>Adress: </span>
              4500 Mercantile plaza, Suite 300,
              <br />
              Fort Worth, TX, 76137, USA
            </p>
            <p className='footer-text'>
              <span className='color-yellow'>Help Line: </span>
              +1 (817) 901 3377
            </p>
            <p className='footer-text'>
              <span className='color-yellow'>Mail: </span>
              info@example.com
            </p>
          </div>

          <div className="social-media-links mt-4">
            <a href="#">
              <FaFacebook className='fs-1 facebook-color me-2' />
            </a>
            <a href="#">
              <FaTwitter className='fs-1 twitter-color me-2' />
            </a>
            <a href="#">
              <FaInstagram className='fs-1 instagram-color me-2' />
            </a>
            <a href="#">
              <FaLinkedin className='fs-1 linkedin-color' />
            </a>
          </div>
        </div>
      </Col>

      <Col xs={12} md={4} className='d-flex justify-content-center'>
        <div className='mr-50'>
          <h3 className='text-uppercase color-yellow mb-3'>open hours</h3>
          <div className='d-flex'>
            <div className="days-of-week">
              <div className='mb-3 footer-text'>Saturday:</div>
              <div className='mb-3 footer-text'>Sunday:</div>
              <div className='mb-3 footer-text'>Monday:</div>
              <div className='mb-3 footer-text'>Tuesday:</div>
              <div className='mb-3 footer-text'>Wednesday:</div>
              <div className='footer-text'>Thursday:</div>
            </div>

            <div className="hours ms-5">
              <div className='mb-3 footer-text'>08:00 – 23.00</div>
              <div className='mb-3 footer-text'>08:00 – 23.00</div>
              <div className='mb-3 footer-text'>08:00 – 21.00</div>
              <div className='mb-3 footer-text'>09:00 – 23.00</div>
              <div className='mb-3 footer-text'>08:00 – 23.00</div>
              <div className='footer-text'>08:00 – 23.00</div>
            </div>
          </div>
        </div>
      </Col>
    </Row >
  )
}
