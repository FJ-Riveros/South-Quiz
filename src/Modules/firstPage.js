import React from "react";
import Select from "./Select";
import StartButton from "./startButton";
import Questions from "./Questions";
import Results from "./Results";

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
  } = props;

  //Checks how many questions are answered ATM
  //When the 10 question are answered it changes the component
  let prueba = true;
  if (suma >= 10) {
    prueba = false;
  }
  console.log(suma);
  return (
    <>
      <div className="Title">Quiz Mania</div>
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
        prueba ? (
          <Questions
            pregunta={pregunta}
            suma={suma}
            setSuma={setSuma}
            player1Points={player1Points}
            setPlayer1Points={setPlayer1Points}
          />
        ) : (
          <Results player1Points={player1Points} />
        )
      ) : null}
    </>
  );
};

export default firstPage;
