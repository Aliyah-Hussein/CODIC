import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1> Check out these EPIC games waiting for you! </h1>
        <div className='cards_container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src='images1/hgmn-1.png' 
                    text='Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters within a certain number of guesses.' 
                    label = 'The Hangman Game' 
                    path='/hangman'/>
                     {/* have to change path */}
                    
                    <CardItem src='images1/crswd-1.png' 
                    text='A crossword puzzle usually takes the form of a square or a rectangular grid of white- and black-shaded squares. The goal is to fill the white squares with letters, forming words or phrases, by solving clues, which lead to the answers.' 
                    label = 'The Crossword Puzzle' 
                    path='/crossword'/> 
                    {/* have to change path */}
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
