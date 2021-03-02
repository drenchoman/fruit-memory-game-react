import React from 'react'

const styles= {
  grid:{
    display: "grid",
    backgroundColor: "#f7d9d9",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr 1fr",
    columnGap: "2%",
    rowGap: "2%",
    width: "80%",
    margin: "7% auto",

  },
  image:{
    width: "70%",
    height: "70%",
    border: "5px solid white",

  },
  card:{
    border: "1px solid #f25287",
    borderRadius: "5px"

  }
}

function Cards(props) {

    return (
      <div style={styles.grid}>
          {props.cards.map((card =>
            <button key={card.id} onClick={()=>props.handleLogic(card.title)} style={styles.card}>
              <img style={styles.image} alt={card.title} src={card.src}></img>
            </button>
          ))}
          </div>

    )
}

export default Cards
