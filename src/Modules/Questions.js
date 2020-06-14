import React, { Fragment, useState } from "react";

const Questions = ({ pregunta }) => {
  const [suma, setSuma] = useState(0);

  return (
    <>
      <div className="container">
        <main>
          <h1 className="game-title">Question {suma + 1}</h1>
          <hr></hr>
          <div className="Game-body">
            <div className="game-text">
              <h3>{pregunta.results[suma].question}</h3>
            </div>
            <div className="game-buttons">
              <button onClick={() => setSuma(suma + 1)}>True</button>
              <button onClick={() => setSuma(suma + 1)}>False</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Questions;
