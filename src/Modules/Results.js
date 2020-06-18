import React from "react";

const results = ({ player1Points, player2Points }) => {
  let winner = 0;
  let winnerPoints = 0;
  let tie = false;
  if (player1Points < player2Points) {
    winner = "Player 2";
    winnerPoints = player2Points;
  } else if (player1Points === player2Points) {
    tie = true;
    winnerPoints = player1Points;
  } else {
    winner = "Player 1";
    winnerPoints = player1Points;
  }
  console.log(player1Points);
  console.log(player2Points);
  return (
    <>
      <h1>Resultados!!</h1>
      <h3>
        {!tie
          ? `The ${winner} won with ${winnerPoints} correct answers`
          : `Tie! Both players have ${winnerPoints} correct answers, try again!`}
      </h3>
    </>
  );
};

export default results;
