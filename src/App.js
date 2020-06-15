import React, { useState, useEffect } from "react";
import FirstPage from "./Modules/firstPage";

function App() {
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
    />
  );
}

export default App;
