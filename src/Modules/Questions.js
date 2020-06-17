import React, { useState, useEffect } from "react";

const Questions = (props) => {
  const { pregunta, setSuma, suma, player1Points, setPlayer1Points } = props;
  //Tracks the answer from the user
  const [answer, setAnswer] = useState("");

  //Stores the correct answer for the actual question
  let correctAnswer = pregunta.results[suma].correct_answer;

  useEffect(() => {
    prueba();
  }, [answer]);

  const prueba = () => {
    if (answer == correctAnswer) {
      setPlayer1Points(player1Points + 1);
      setAnswer("");
    }
  };

  return (
    <>
      <div className="container">
        <main>
          <h1>Question {suma + 1}</h1>
          {correctAnswer}
          {answer}
          {player1Points}
          {suma}

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
                      setSuma(suma + 1);
                    }, 50);
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
                      setSuma(suma + 1);
                    }, 50);
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
