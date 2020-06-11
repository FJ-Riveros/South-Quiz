import React, { Fragment } from "react";
import Select from "./Select";
import StartButton from "./startButton";
import Questions from "./Questions";

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
  } = props;
  return (
    <Fragment>
      <div className="Title">Quiz Mania</div>
      <div className="container">
        <form>
          {/*"onSubmit.... "*/}
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
            <Questions pregunta={pregunta} />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default firstPage;
