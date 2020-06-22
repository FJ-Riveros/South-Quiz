import React from "react";
import Confetti from "./Confetti";

const results = ({ player1Points, player2Points, Players }) => {
  let winner = 0;
  let winnerPoints = 0;
  let tie = false;

  const reset = () => {
    window.location.reload();
  };
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
      <div className="results-main">
        <div className="results-title">
          <h1>Results</h1>
        </div>
        <div className="result-box">
          <h3>
            {!tie
              ? Players === 1
                ? `You answered ${winnerPoints} questions correctly!`
                : `The ${winner} won with ${winnerPoints} correct answers!`
              : `Tie! Both players have ${winnerPoints} correct answers, try again!`}
          </h3>
          <button onClick={() => reset()}>Play again!</button>
        </div>
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
      </div>
    </>
  );
};

export default results;
