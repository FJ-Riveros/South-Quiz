import React, { useState, useEffect } from "react";

const Questions = (props) => {
  const {
    pregunta,
    setSuma,
    suma,
    player1Points,
    setPlayer1Points,
    setPlayer2Points,
    player2Points,
    Players,
  } = props;

  //Tracks the answer from the user
  const [answer, setAnswer] = useState("");

  //Stores the correct answer for the actual question
  let correctAnswer = pregunta.results[suma].correct_answer;

  useEffect(() => {
    pointValidation();
  }, [answer]);

  //Gives the point to a player if he answers correctly
  const pointValidation = () => {
    if (answer === correctAnswer) {
      if (suma % 2 === 0) {
        setPlayer1Points(player1Points + 1);
      } else {
        setPlayer2Points(player2Points + 1);
      }
    }
  };

  return (
    <>
      <div className="container">
        <main>
          <h1>
            {Players === 1
              ? null
              : suma % 2 === 0
              ? "Player 1 Answers"
              : "Player 2 Answers"}
          </h1>
          <h1>Question {suma + 1}</h1>
          <hr></hr>
          <div className="Game-body">
            <div className="game-text">
              <h3>{pregunta.results[suma].question}</h3>
            </div>
            <div className="game-buttons">
              <button
                onClick={() => {
                  setAnswer("True");
                  if (suma <= 9) {
                    setTimeout(() => {
                      setAnswer("");
                      setSuma(suma + 1);
                    }, 100);
                  }
                }}
              >
                True
              </button>
              <button
                onClick={() => {
                  setAnswer("False");
                  if (suma <= 9) {
                    setTimeout(() => {
                      setAnswer("");
                      setSuma(suma + 1);
                    }, 100);
                  }
                }}
              >
                False
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Questions;
