import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // //function that displays buttons according to the screen size
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }
    else{
      setButton(true);
    }
  };

  useEffect(() => { 
    showButton();
  }, []);
  
   window.addEventListener('resize', showButton);


  return (
       <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className='fas fa-solid fa-dice' ></i>C O D I C
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hangman'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Hangman
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/crossword'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Crossword Puzzle
                
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/games'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sign-In
              </Link>
            </li>

            

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up

              </Link>
            </li>
          </ul>
          <div>
          {button && <Button buttonStyle= 'btn--outline'> SIGN UP </Button>}
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
