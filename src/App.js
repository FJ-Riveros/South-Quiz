import React, { useState, useEffect, Fragment } from "react";
import FirstPage from "./Modules/firstPage";

function App() {
  const [pregunta, setPregunta] = useState(0);

  //How many players
  const [Players, setPlayers] = useState(1);

  //Difficulty selected
  const [Difficulty, setDifficulty] = useState("easy");
  //Question category
  const [Category, setCategory] = useState("Any");

  //Start Command
  const [start, setStart] = useState(false);

  //Categories
  const requestCategories = async () => {
    const call = await fetch(`https://opentdb.com/api_category.php`);
    const categories = await call.json();
    console.log(categories);
  };

  //API Questions
  const requestData = async () => {
    const data = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${Difficulty}&type=boolean`
    );
    const response = await data.json();
    //setPregunta(response);
    console.log(response);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  {
    if (start == true) {
      requestData();
    }
  }
  /*useEffect(() => {
    {
      console.log(Difficulty);
    }
    fetch(
      `https://opentdb.com/api.php?amount=10&category=14&difficulty=${Difficulty}&type=boolean`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPregunta(data);
      })
      .catch(() => {
        console.log("No funciona");
      });
  }, []);*/

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
    />
  );
}

export default App;
