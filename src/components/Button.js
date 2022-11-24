import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

// passing properties
export const Button = ({
    children,
    type,
    onClick, 
    buttonStyle, 
    buttonSize
}) => { 
  //button style functions
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]  //array set to apply default style if no style is applied

  //button size functions
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] //array set to apply default size if no size style is applied

  return(
    <Link to='/sign-up' className='btn-mobile'>
        <button 
        className= {'btn ${checkButtonStyle ${checkButtonSize}'}
        onClick = {onClick}
        type={type}
        >
            {/* rendering whatever is inside the button tag... in this case, it is the children */}

          {children}  

        </button>
    </Link>
  )
};