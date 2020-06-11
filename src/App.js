import React, { useState } from "react";
import FirstPage from "./Modules/firstPage";

function App() {
  //How many players
  const [Players, setPlayers] = useState(1);

  //Difficulty selected
  const [Difficulty, setDifficulty] = useState("Easy");
  //Question category
  const [Category, setCategory] = useState("Any");

  return (
    <FirstPage
      Players={Players}
      setPlayers={setPlayers}
      Difficulty={Difficulty}
      setDifficulty={setDifficulty}
      Category={Category}
      setCategory={setCategory}
    />
  );
}

export default App;
