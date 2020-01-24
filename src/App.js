import React, { useState } from "react";
import {
  ThemeProvider,
  createMuiTheme,
  StylesProvider,
  createGenerateClassName,
  responsiveFontSizes
} from "@material-ui/core/styles";

import { NightsStay, WbSunny } from "@material-ui/icons";
import Main from "./routes/Main";
import { StoreProvider } from "./hooks";
import "./App.css";
import { Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "lemon-light-"
});

const useStyles = makeStyles(theme => ({
  checkBox: {
    position: "absolute",
    right: 10,
    top: 10
  }
}));

export default function App() {
  const classes = useStyles(),
    [night, setNight] = useState(true);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: night ? "dark" : "light"
        },
        overrides: {
          MuiInputLabel: {
            root: {
              fontSize: "13px"
            }
          }
        }
      }),
    [night]
  );

  const handleClick = () => setNight(!night);
  return (
    // generate dynamic class name
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <StoreProvider>
          <Checkbox
            className={classes.checkBox}
            icon={<WbSunny />}
            checkedIcon={<NightsStay />}
            value="checkedH"
            onClick={handleClick}
          />
          <Main />
        </StoreProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}
