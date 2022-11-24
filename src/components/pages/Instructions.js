import React from "react";
import '../../App.css';

export default function Instructions() {
    return <h1 className="Instructions"> <u>INSTRUCTIONS</u>  
   <u><p>How to Play: Hangman</p></u>
   <p>After selecting the Hangman option from the dashboard,
     you will then be lead to the start of the game. Follow this step by step guide:</p>

     <p>•	Read the given question placed above the hangman image to find out what the missing word is</p>
     <p>•	Using the provided rows of letters below the image, use your mouse / trackpad to click on any one of the given letters to enter it into the missing word space.</p>
   <p>•	If the letter you have selected is part of the missing word, the hangman image will not update itself.
<p></p>•	Continue to use your mouse / trackpad to click on letters you think are part of the missing word until it is found.
</p>

<div><u><p>How to Play: CROSSWORD</p></u>
<p>After selecting the Crossword option from the dashboard, you will then be lead to the start of the game. Follow this step by step guide:</p>
<p>•	All questions ad definitions will be provided on the right hand side of your screen.</p>
<p>•	Simply click on any space in the puzzle and the corresponding definition will be highlighted on in the definitions & questions list.</p>

<p>•	Enter a word in the blank space provided in the puzzle.
•	Correct letters will be highlighted in green.
•	Incorrect letters will be highlighted in red.
•	Repeat this process until the puzzle is completed.
</p>
</div>


   </h1>

   



}