import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Masket_text from "../Component/Masket_text/Masket_text";
import Letterbutton from "../Component/letterbuttons/Letterbutton";
import Hangeman from "../Component/hangmangame/hangman";
function Playgame(){
  const {state} = useLocation()
  const [Guessed_letter, setGuessed_letter] = useState([])
  const [step, setstep] = useState(0)



  function handleletterclick(letter){
    if(state.worldSelected.toUpperCase().includes(letter)){
      console.log("correct")
    }else{
      setstep(step+1)
    }

    setGuessed_letter([...Guessed_letter,letter])

  }

    return(
  <>
  <h1>playing the Game...</h1>
  <p>you can start the game by clicking the button below</p>
  <Masket_text text={state.worldSelected} Guessed_letter={Guessed_letter} />
  <div>
    <Letterbutton text={state.worldSelected} Guessed_letter={Guessed_letter} onletterclick={handleletterclick}/>
  </div>
  <div>
    <Hangeman step={step}/>
  </div>
  <Link to ='/start' className="text-blue-500 hover:text-blue-700 underline font-medium">start Game Link</Link>
        

  </>  
)
}
export default Playgame;