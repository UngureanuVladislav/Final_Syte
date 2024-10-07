import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BiSearch } from "react-icons/bi";
import MainButton from '../../../Template/MainButton';
import '../../../../assets/styles/slider.css';

export default function Slider() {
  const [inputValue, setInputValue] = useState('');
  const classesWithImages = ['img1', 'img2', 'img3',];

  const handleKeyPress = (event) => {
    if (inputValue === '') {
      return;
    }

    if (event.key === 'Enter') {
      window.location.href = `/search/${inputValue}`;
    }
  }

  const handleButtonClick = () => {
    if (inputValue === '') return;
    window.location.href = `/search/${inputValue}`;
  }

  return (
    <div className="position-relative">
      <Carousel indicators={false} controls={false} interval={5000}>
        {classesWithImages.map((image, index) => (
          <Carousel.Item key={index}>
            <div className={`w-100 slider-img ${image}`} />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="slider-content position-absolute translate-middle-x">

        <Form className="slider-search-input d-flex w-100" onSubmit={(event) => event.preventDefault()}>
          <Form.Control
            type="text"
            placeholder="Search Your Details..."
            className='input-search'
            aria-label="Search"
            value={inputValue}
            onInput={(event) => setInputValue(event.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button className='slider-search-button' onClick={handleButtonClick}>
            <BiSearch className='fs-5 text-white' />
          </Button>
        </Form>

        <div className="slider-text-container mt-4">
          <h1 className='text-center'>Welcome The CarIndustry</h1>
          <div className='slider-text d-flex justify-content-center'>
            <p className=' text-center text-white'>Lorem Ipsum is simply dummy text of the printing and type setting
              industry. Lorem Ipsum has been the industry's</p>
          </div>
        </div>
        <MainButton
          href='/menu'
          contentText='Explore'
          padding='17px 40px'
          color='#800080' fontSize='25px'
          borderRadius='41px'
          background='#ffbe00' />
      </div>
    </div >
  );
}