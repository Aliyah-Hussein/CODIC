// import React, { Component } from 'react';
// import './Level.css';
// import { value } from './answer.js';
// // import { Link } from 'react-router-dom';                                                


// import step0 from "../../images2/0.jpg";
// import step1 from "../../images2/1.jpg";
// import step2 from "../../images2/2.jpg";
// import step3 from "../../images2/3.jpg";
// import step4 from "../../images2/4.jpg";
// import step5 from "../../images2/5.jpg";
// import step6 from "../../images2/6.jpg";

// class Level extends Component {
//   static defaultProps = {
//     maxWrong: 6,
//     images: [step0, step1, step2, step3, step4, step5, step6]
//   }

//   constructor(props) {
//     super(props);
//     this.state = {
//       mistake: 0,
//       guessed: new Set([]),
//       answer: value()
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
//     return "0123456789".split("").map(letter => (
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
//       answer: value()
//     });
//   }

//   render() {
//     const gameOver = this.state.mistake >= this.props.maxWrong;
//     const isWinner = this.guessedWord().join("") === this.state.answer;
//     let gameStat = this.generateButtons();

//     if (isWinner) {
//       gameStat = "You Won!!!"
//     }

//     if (gameOver) {
//       gameStat = "You Lost!!!"
//     }

//     return (
//       <div className="Hangman container">
//         <h1 className='text-center'>What will be the output of the following code snippet?</h1>
//         <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
//         <div className="text-center">

        
//           <img src={this.props.images[this.state.mistake]} alt=""/>
//         </div>
//         <div className="text-center">
//           <p>QUESTION 3: print(2**3 + (5 + 6)**(1 + 1)) </p>
//           <p>
//             {!gameOver ? this.guessedWord() : this.state.answer}
//           </p>
//           <p>{gameStat}</p>

          
//           <button className='btn btn-info' onClick={this.resetButton}>Reset</button>
        
//         </div>
//       </div>
//     )
//   }
// }
// export default Level


import React, { Component } from 'react';
import './Level.css';
import { value } from './answer.js';
import { Link } from 'react-router-dom';                                                
import Home from "./Home";

import step0 from "../../images2/0.jpg";
import step1 from "../../images2/1.jpg";
import step2 from "../../images2/2.jpg";
import step3 from "../../images2/3.jpg";
import step4 from "../../images2/4.jpg";
import step5 from "../../images2/5.jpg";
import step6 from "../../images2/6.jpg";

class Level extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [step0, step1, step2, step3, step4, step5, step6]
  }

  constructor(props) {
    super(props);
    this.state = {
      mistake: 0,
      guessed: new Set([]),
      answer: value()
    }
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
    return "0123456789".split("").map(letter => (
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
      answer: value()
    });
  }

  render() {
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameStat = this.generateButtons();

    if (isWinner) {
      gameStat = "You Won!!!"

      gameStat = "Points: 1"
     

    }

    if (gameOver) {
      gameStat = "You Lost!!!"

      gameStat = "Points: 0"
     
    }

    return (
      <div className="Hangman container">
        <h1 className='text-center'>What will be the output of the following code snippet?</h1>
        <div className="float-right">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
        <div className="text-center">

        
          <img src={this.props.images[this.state.mistake]} alt=""/>
        </div>
        <div className="text-center">
          <p>LEVEL 3: print(2**3 + (5 + 6)**(1 + 1)) </p>
          <p>
            {!gameOver ? this.guessedWord() : this.state.answer}
          </p>
          <p>{gameStat}</p>

          
          <button className='btn btn-info' onClick={this.resetButton}>Reset</button>

          <Link to="/Home">
          <button className="btn btn-success"
                        onClick={Home}>EXIT
                    </button>
                    </Link>
        
        </div>
      </div>
    )
  }
}
export default Level