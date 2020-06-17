import React, { useState, useEffect } from "react";
import FirstPage from "./Modules/firstPage";

function App() {
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

  //Categories select
  useEffect(() => {
    fetch(`https://opentdb.com/api_category.php`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  useEffect(() => {
    init();
  }, [start]);

  //API Questions
  const requestData = async () => {
    const data = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${Difficulty}&type=boolean`
    );
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
    />
  );
}

export default App;
