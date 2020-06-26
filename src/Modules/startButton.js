import React from "react";
import Button from "@material-ui/core/Button";

const startButton = ({ setStart }) => {
  return (
    <Button
      onClick={() => {
        setStart(true);
      }}
      variant="contained"
      size="large"
    >
      Start
    </Button>
  );
};

export default startButton;
