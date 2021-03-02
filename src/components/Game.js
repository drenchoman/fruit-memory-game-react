import React, { useState } from 'react'
import Header from './Header'
import Grid from './Grid'

const styles = {
  container:{
    backgroundColor: "#f7d9d9",
    height: "100vh",
  }
}

function Game() {

const [score, setScore] = useState(0)
const [bestScore, setBestScore] = useState(0)
const [cardsArray, setCardArray] = useState([])
const [header, setHeader] = useState("Fruit Memory Game")

const handleCard = (cardName) => {
  setCardArray((prevArray) => [...prevArray, cardName])
  console.log(cardsArray)
};

const handleScore = () => {
  setScore((prevScore) => prevScore + 1)
};

const handleHighScore = (prevScore) => {
  setBestScore((prevScore) => {
    if(prevScore > score){
      setBestScore(prevScore)
      console.log(prevScore)
    } else {
      setBestScore(score)
    }
  })
};

const reset = () => {
  setScore(0);
  setCardArray([]);
}

const checkWinner = () => {
    if(score === 14){
      setHeader("You win! Congratulations!")
    }
};

const handleLogic = (cardName) => {
  if(!cardsArray.includes(cardName)) {
    handleCard(cardName);
    handleScore();
    checkWinner();
  } else {
    handleHighScore();
    reset();
    setHeader("Fruit Memory Game")
  }
};


    return (
        <div style={styles.container}>
          <Header score={score} bestScore={bestScore} header={header} />
          <Grid score={score} bestScore={bestScore} handleLogic={handleLogic}/>
        </div>
    )
}

export default Game
