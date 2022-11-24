import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Hangman from './Hangman';

// import step10 from "./images/10.jpg";
import step10 from "../../images2/10.jpg";

class Home_H extends Component {
 
    static defaultProps = {
        
        images: [step10 ]
      }

  render() {
    
   
    return (
      
      <div className="Hangman container">
        <h1 className='text-center'>Welcome to CODIC</h1>
        <score>{this.score}</score>
        
        <div className="text-center">
          
        </div>
        <div className="text-center">
          <p>Codic is a series of free apps that allows users to learn a variety of
             programming languages and concepts through short lessons, code challenges, and quizzes. 
             Lessons are written with the beginner in mind, so anyone can learn to read and write their own code. 
             Codic is available for free download for iOS on the App Store here and for Android on Google Play here.
             GAMES to learn courses can be accessed  here</p>

             <div>
      {/* <img src="images/10.jpg" alt="images/10.jpg"/> */}
      <img src="../../images2/10.jpg" alt="../../images2/10.jpg"/>
    </div>
        
          <Link to="/Hangman">
          <button className="btn btn-success"
                        onClick={Hangman}>START HANGMAN
                    </button>
                    </Link>
        </div>
      </div>
    )
  }
}

export default Home_H