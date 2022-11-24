import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Hangman from './components/HangmanGame/Hangman';
import Crossword from './components/pages/Crossword';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Question from './components/HangmanGame/Question';
import Level from './components/HangmanGame/Level';
// import Home_H from './components/HangmanGame/Home'
import About from './components/pages/About';
 
import Instructions from './components/pages/Instructions';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            {/* <Route path="/" exact component = 'Home' /> */}
            <Route path='/' exact element={<Home/>} />
            {/* <Route path='./components/HangmanGame/Home_H' exact element={<Home_H/>} /> */}
            <Route path='/hangman' exact element={<Hangman/>} />
            <Route path='/crossword' exact element={<Crossword/>} />
            <Route path='/sign-up' exact element={<SignUp/>} />
            <Route path='/question' exact element={<Question/>} />
            <Route path='/level' exact element={<Level/>} />
            <Route path='/sign-in' exact element={<SignIn/>} />
            <Route path='/about' exact element={<About/>} />
            <Route path='/instructions' exact element={<Instructions/>} />


          </Routes>
      </Router>
    </>
  );
}

export default App;
