import React from 'react'
import { Button } from './Button';
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join to get notified on the latest games updated on the website.
            </p>   
            <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p> 
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email'/>
                    <Button buttonStyle='btn--outline' > Subscribe </Button>
                </form>            
            </div>  
        </section>

        <div className='footer-links'>
            <div className='fotter-link-wrapper'>
                <div className='footer-link-items'>
                    
                    
                     <Link to='/About'> ABOUT US</Link>
                     
                    <Link to='/Instructions'> INSTRUCTIONS</Link>
                    
                    
                    {/* <Link to='/'>Testimonials</Link> */}
                    

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer
