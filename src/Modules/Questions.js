import React, { useState, useEffect } from "react";
import base64 from "react-native-base64";
import QuestionButton from "./QuestionButton";

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
    setTransition,
    setTransitionAnswer,
  } = props;

  //Tracks the answer from the user
  const [answer, setAnswer] = useState("");

  //Stores the correct answer for the actual question and decodes it
  //to True or False
  let correctAnswer = base64.decode(pregunta.results[suma].correct_answer);
  console.log(correctAnswer);
  useEffect(() => {
    pointValidation();
  }, [answer]);

  //Gives the point to a player if he answers correctly
  const pointValidation = () => {
    if (answer === correctAnswer) {
      setTransitionAnswer(true);
      if (Players === 1) {
        setPlayer1Points(player1Points + 1);
      } else if (suma % 2 === 0) {
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
              <h3>{base64.decode(pregunta.results[suma].question)}</h3>
            </div>
            <div className="game-buttons">
              <button
                onClick={async () => {
                  setAnswer("True");
                  await pointValidation();
                  if (suma <= 9) {
                    setTransition(true);
                    setTimeout(() => {
                      setTransition(false);
                      setAnswer("");
                      setSuma(suma + 1);
                      setTransitionAnswer("");
                    }, 750);
                  }
                }}
              >
                True
              </button>

              <button
                onClick={async () => {
                  setAnswer("False");
                  await pointValidation();
                  if (suma <= 9) {
                    setTransition(true);
                    setTimeout(() => {
                      setTransition(false);
                      setAnswer("");
                      setSuma(suma + 1);
                      setTransitionAnswer("");
                    }, 750);
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

//Fix the transition memory ISSUE
