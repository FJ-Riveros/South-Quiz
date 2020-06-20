import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { orange } from "@material-ui/core/colors";

export default () => {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
      colors={["#f4a836", "#f4b536", "#f4c136", "#f4cb36"]}
    />
  );
};
