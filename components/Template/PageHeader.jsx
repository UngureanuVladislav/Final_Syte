import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/page-header.css';

export default function PageHeader(props) {
  return (
    <div className='header-img'>
      <h1 className='text-center text-white mb-4'>{props.textContent}</h1>
      <div className='header-paging d-flex justify-content-center align-items-center'>
        <Link className='header-paging-link text-white' to='/'>Home</Link>
        <span className='header-paging-line mx-3'></span>
        <h6 className='mt-2'>{props.textContent}</h6>
      </div>
    </div>
  )
}
