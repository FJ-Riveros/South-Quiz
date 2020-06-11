import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    contained: {
      // Name of the rule
      text: {
        // Some CSS
        width: "70px",
      },
    },
  },
});

function startButton() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" size="large">
        Start
      </Button>
    </ThemeProvider>
  );
}

export default startButton;
