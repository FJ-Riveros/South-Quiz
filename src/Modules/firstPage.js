import React from "react";
import Select from "./Select";
import StartButton from "./startButton";
import Questions from "./Questions";
import Results from "./Results";
import TransitionScreen from "./TransitionScreen";

const firstPage = (props) => {
  const {
    Players,
    setPlayers,
    Difficulty,
    setDifficulty,
    Category,
    setCategory,
    pregunta,
    setStart,
    start,
    loading,
    suma,
    setSuma,
    player1Points,
    setPlayer1Points,
    player2Points,
    setPlayer2Points,
    transition,
    setTransition,
    setTransitionAnswer,
    transitionAnswer,
  } = props;

  //Checks how many questions are answered ATM
  //When the 10 question are answered it changes the component
  let results = false;
  if (suma >= 10) {
    results = true;
  }

  return (
    <>
      <div className="Title">Quiz Storm</div>
      {!start && (
        <div className="container">
          <main>
            <h1>Settings</h1>
            <hr></hr>
            <div className="Settings-body">
              <div className="Settings-Players">
                <Select
                  Players={Players}
                  setPlayers={setPlayers}
                  Difficulty={Difficulty}
                  setDifficulty={setDifficulty}
                  Category={Category}
                  setCategory={setCategory}
                />
              </div>
              <div className="Buttons">
                <StartButton setStart={setStart} start={start} />
              </div>
            </div>
          </main>
        </div>
      )}
      {!loading ? (
        !results ? (
          !transition ? (
            <Questions
              pregunta={pregunta}
              suma={suma}
              setSuma={setSuma}
              player1Points={player1Points}
              setPlayer1Points={setPlayer1Points}
              player2Points={player2Points}
              setPlayer2Points={setPlayer2Points}
              Players={Players}
              setTransition={setTransition}
              transition={transition}
              setTransitionAnswer={setTransitionAnswer}
            />
          ) : (
            <TransitionScreen transitionAnswer={transitionAnswer} />
          )
        ) : (
          <Results
            player1Points={player1Points}
            player2Points={player2Points}
            Players={Players}
          />
        )
      ) : null}
    </>
  );
};

export default firstPage;
