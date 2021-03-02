import React from 'react'

const styles={
  container:{
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f25287",
  },
  header:{
    display: "flex",
    width: "90%",
    justifyContent: "center",
    paddingTop: "1%",
    paddingLeft: "2%",
    flexDirection: "column",

  },
  score:{
    display: "flex",
    width: "20%",
    flexDirection: "column",
    justifyContent: "center",

  },
  title:{
    margin: "0",
    fontSize: "48px"
  },
  subTitle:{
    fontSize: "18px",
    fontWeight: "300",
  }
}

function Header(props) {

    return (
        <div style={styles.container}>
          <div style={styles.header}>
              <h1 style={styles.title}>{props.header}</h1>
              <h2 style={styles.subTitle}>Get points by clicking on an image but don't click on any more than once!</h2>
          </div>
          <div style={styles.score}>
              <span>Score: {props.score}</span>
              <span>Best Score: {props.bestScore}</span>
          </div>
        </div>
    )
}

export default Header
