import React, { useState, useEffect } from 'react'
import Cards from "./Cards"
import angryapple from '../images/angryapple.png'
import apple from '../images/apple.png'
import banana from '../images/banana.png'
import cherry from '../images/cherry.png'
import doublecherry from '../images/doublecherry.png'
import grapefruit from '../images/grapefruit.png'
import kiwi from '../images/kiwi.png'
import orange from '../images/orange.png'
import pear from '../images/pear.png'
import pineapple from '../images/pineapple.png'
import redapple from '../images/redapple.png'
import strawberry from '../images/strawberry.png'
import watermelon from '../images/watermelon.png'
import pinklemon from '../images/pinklemon.png'
import lime from '../images/lime.png'


function Grid (props) {

  const images = [{
    id: 0,
    src: angryapple,
    title: "Angry Apple",
  },
  {
    id: 1,
    src: apple,
    title: "Apple",
  },
  {
    id: 2,
    src: banana,
    title: "Banana",
  },
  {
    id: 3,
    src: cherry,
    title: "Cherry",
  },
  {
    id: 4,
    src: doublecherry,
    title: "Double Cherry",
  },
  {
    id: 5,
    src: grapefruit,
    title: "GrapeFruit",
  },
  {
    id: 6,
    src: kiwi,
    title: "Kiwi Fruit",
  },
  {
    id: 7,
    src: orange,
    title: "Orange",
  },
  {
    id: 8,
    src: pear,
    title: "Pear",
  },
  {
    id: 9,
    src: pineapple,
    title: "Pineapple",
  },
  {
    id: 10,
    src: redapple,
    title: "Red Apple",
  },
  {
    id: 11,
    src: strawberry,
    title: "Strawberry",
  },
  {
    id: 12,
    src: watermelon,
    title: "Watermelon",
  },
  {
    id: 13,
    src: lime,
    title: "Lime",
  },
  {
    id: 14,
    src: pinklemon,
    title: "Pink Lemon"
  }

  ]

  const [cards, setNewCards] = useState(images)

  const shuffle = (newCards) => {
    for (let i = newCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * i);
      [newCards[randomIndex], newCards[i]] = [newCards[i], newCards[randomIndex]]
    }
  };

  useEffect(() => {
    const newCards = [...cards];
    shuffle(newCards);
    setNewCards(newCards);
  }, [props.score, props.bestScore]);

    return (
          <Cards handleLogic={props.handleLogic} cards={cards} />

    )
};

export default Grid
