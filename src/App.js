import React, { useState, useEffect } from "react";
import FirstPage from "./Modules/firstPage";

function App() {
  //Has the info from the API to create the categories
  const [categoryinfo, setCategoryInfo] = useState("");

  //Tracks the question number
  const [suma, setSuma] = useState(0);

  //Questions from the API
  const [pregunta, setPregunta] = useState(0);

  //How many players
  const [Players, setPlayers] = useState(1);

  //Difficulty selected
  const [Difficulty, setDifficulty] = useState("easy");

  //Question category
  const [Category, setCategory] = useState("Any");

  //Start Command
  const [start, setStart] = useState(false);

  //API loading?
  const [loading, setLoading] = useState(true);

  //Tracks the points for the player 1
  const [player1Points, setPlayer1Points] = useState(0);

  //Tracks the points for the player 2
  const [player2Points, setPlayer2Points] = useState(0);

  //Defines when to transition between the questions
  const [transition, setTransition] = useState(false);

  //Declares in the transition if the question was correctly answered or not
  const [transitionAnswer, setTransitionAnswer] = useState("");

  //Categories select
  useEffect(() => {
    fetch(`https://opentdb.com/api_category.php`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategoryInfo(data);
      });
  }, []);

  useEffect(() => {
    init();
  }, [start]);

  //API Questions
  const requestData = async () => {
    let data;
    if (Category === "Any") {
      data = await fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=${Difficulty}&type=boolean&encode=base64`
      );
    } else {
      data = await fetch(
        `https://opentdb.com/api.php?amount=10&difficulty=${Difficulty}&type=boolean&category=${Category}&encode=base64`
      );
    }
    const response = await data.json();
    setPregunta(response);
    setLoading(false);
  };

  const init = async () => {
    if (start) {
      requestData();
    }
  };

  return (
    <FirstPage
      Players={Players}
      setPlayers={setPlayers}
      Difficulty={Difficulty}
      setDifficulty={setDifficulty}
      Category={Category}
      setCategory={setCategory}
      pregunta={pregunta}
      setStart={setStart}
      start={start}
      loading={loading}
      suma={suma}
      setSuma={setSuma}
      player1Points={player1Points}
      setPlayer1Points={setPlayer1Points}
      player2Points={player2Points}
      setPlayer2Points={setPlayer2Points}
      categoryinfo={categoryinfo}
      setTransition={setTransition}
      transition={transition}
      setTransitionAnswer={setTransitionAnswer}
      transitionAnswer={transitionAnswer}
    />
  );
}

export default App;
