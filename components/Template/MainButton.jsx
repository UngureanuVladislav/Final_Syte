import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import '../../assets/styles/main-button.css';

export default function MainButton(props) {
  const styles = {
    button: {
      padding: props.padding,
      color: props.color,
      fontSize: props.fontSize,
      borderRadius: props.borderRadius,
      background: props.background,
    }
  }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Link to={props.href}>
        <button className='explore-button position-relative' style={styles.button}>
          {props.contentText}
          <FaArrowRight className='ms-2' />
        </button>
      </Link>
    </div>
  )
}