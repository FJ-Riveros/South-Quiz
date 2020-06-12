import React, { Fragment } from "react";

const Questions = ({ pregunta }) => {
  /*let html = `
  <h2>Category ${pregunta[0].category}</h2>
  `;*/

  return (
    <>
      {console.log(pregunta.results[1].question)}
      <h1>Question</h1>
    </>
  );
};

export default Questions;
