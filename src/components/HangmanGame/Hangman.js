// // import React from "react";
// // import '../../App.css';

// // export default function Hangman() {
// //     return <h1 className="hangman"> HANGMAN </h1>
// // }

// import React, { Component } from 'react';
// import './Hangman.css';
// import './App.css';
// import { randomWord } from './Words.js';
// import { Link } from 'react-router-dom';

// import step0 from "../../images2/0.jpg";
// import step1 from "../../images2/1.jpg";
// import step2 from "../../images2/2.jpg";
// import step3 from "../../images2/3.jpg";
// import step4 from "../../images2/4.jpg";
// import step5 from "../../images2/5.jpg";
// import step6 from "../../images2/6.jpg";
// import Question from './Question';

// class Hangman extends Component {
//   static defaultProps = {
//     maxWrong: 6,
//     images: [step0, step1, step2, step3, step4, step5, step6]
//   }


//   constructor(props) {
//     super(props);
//     this.state = {
//       mistake: 0,
//       guessed: new Set([]),
//       answer: randomWord(),
//       score:0
//     }
//   }

//   handleGuess = e => {
//     let letter = e.target.value;
//     this.setState(st => ({
//       guessed: st.guessed.add(letter),
//       mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
//     }));
//   }

//   guessedWord() {
//     return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
//   }

//   generateButtons() {
//     return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
//       <button
//         class='btn btn-lg btn-primary m-2'
//         key={letter}
//         value={letter}
//         onClick={this.handleGuess}
//         disabled={this.state.guessed.has(letter)}
//       >
//         {letter}
//       </button>
//     ));
//   }

//   resetButton = () => {
//     this.setState({
//       mistake: 0,
//       guessed: new Set([]),
//       answer: randomWord()
//     });
//   }

//   render() {
//     const gameOver = this.state.mistake >= this.props.maxWrong;
//     const isWinner = this.guessedWord().join("") === this.state.answer;
//     let gameStat = this.generateButtons();

//     if (isWinner) {
//       gameStat = "You Won!!!"
//      this.score++

//     }

//     if (gameOver) {
//       gameStat = "You Lost!!!"
//     }

//     return (
//       <div className="Hangman container">
//         <h1 className='text-center'>Welcome to Hangman</h1>
//         <score>{this.score}</score>
//         <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
//         <div className="text-center">
//           <img src={this.props.images[this.state.mistake]} alt=""/>
//         </div>
//         <div className="text-center">
//           <p>QUESTION 1:WHAT NUMBER DOES AN ARRAY INDEX START FROM?</p>
//           <p>
//             {!gameOver ? this.guessedWord() : this.state.answer}
//           </p>
//           <p>{gameStat}</p>

//           <Link to="/Question">
//           <button className="btn btn-success"
//                         onClick={Question}>Next Question
//                     </button>
//                     </Link>
    

          
//         </div>
//       </div>
//     )
//   }
// }

// export default Hangman

import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';
import { Link } from 'react-router-dom';

// import step0 from "./images/0.jpg";
// import step1 from "./images/1.jpg";
// import step2 from "./images/2.jpg";
// import step3 from "./images/3.jpg";
// import step4 from "./images/4.jpg";
// import step5 from "./images/5.jpg";
// import step6 from "./images/6.jpg";
import step0 from "../../images2/0.jpg";
import step1 from "../../images2/1.jpg";
import step2 from "../../images2/2.jpg";
import step3 from "../../images2/3.jpg";
import step4 from "../../images2/4.jpg";
import step5 from "../../images2/5.jpg";
import step6 from "../../images2/6.jpg";
import Question from './Question';

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord(),
      score:0,
      statescore:0
    }
  }

  increaseScore() {
    this.setState({
      score: this.state.score + 2
    });
  }

  handleGuess = e => {
    let letter = e.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(letter),
      mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
    }));
  }

  guessedWord() {
    return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
  }

  generateButtons() {
    return "abcdefghjklmnopqrstuvwxyz".split("").map(letter => (
      <button
        class='btn btn-lg btn-primary m-2'
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }

  resetButton = () => {
    this.setState({
      mistake: 0,
      guessed: new Set([]),
      answer: randomWord()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"
     this.score++ 
     gameStat = "Points: 1"
     

     
    }

    if (gameOver) {
      gameStat = "You Lost!!!"
      gameStat = "Points: 0"
    }

    return (
      
      <div className="Hangman container">
        <h1 className='text-center'>Welcome to Hangman</h1>
        <score>{this.score}</score>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          <p>LEVEL 1 :WHAT NUMBER DOES AN ARRAY INDEX START FROM?</p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>

          <button className='btn btn-info' onClick={this.resetButton}>Reset</button>

          <Link to="/Question">
          <button className="btn btn-success"
                        onClick={Question}>Next Question
                    </button>
                    </Link>

                    

          
        </div>
      </div>
    )
  }
}

export default Hangman