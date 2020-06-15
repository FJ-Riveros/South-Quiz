import React, { useState, useEffect } from "react";

const Questions = ({ pregunta }) => {
  //Tracks the question number
  const [suma, setSuma] = useState(0);

  //Tracks the answer from the user
  const [answer, setAnswer] = useState("");

  //Tracks the points for the player 1
  const [player1Points, setPlayer1Points] = useState(0);

  //Stores the correct answer for the actual question
  let correctAnswer = pregunta.results[suma].correct_answer;

  useEffect(() => {
    prueba();
  }, [answer]);

  const prueba = async () => {
    if (answer == correctAnswer) {
      setPlayer1Points(player1Points + 1);
    }
  };

  return (
    <>
      <div className="container">
        <main>
          <h1>Question {suma + 1}</h1>
          {correctAnswer}
          {player1Points}
          <hr></hr>
          <div className="Game-body">
            <div className="game-text">
              <h3>{pregunta.results[suma].question}</h3>
            </div>
            <div className="game-buttons">
              <button
                onClick={() => {
                  setSuma(suma + 1);
                  setAnswer("True");
                }}
              >
                True
              </button>
              <button
                onClick={() => {
                  setSuma(suma + 1);
                  setAnswer("False");
                }}
              >
                False
              </button>
              {console.log(pregunta.results[0].correct_answer)}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Questions;
