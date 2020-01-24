import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import { HashRouter, Switch, Route } from "react-router-dom";

import { DrawerComponent, Home } from "../components";
import { PreProductionRoute } from "./PreProductionRoute";
import { ProductionRoute } from "./ProductionRoute";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1.5),
    height: "100vh",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  container: {
    height: "100%",
    alignItems: "center"
  },
  main: {
    textAlign: "center"
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HashRouter>
        <Grid container className={classes.container}>
          <Grid item xs={2}>
            <DrawerComponent />
          </Grid>
          <Grid item xs={10} className={classes.main}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pp" component={PreProductionRoute} />
              <Route path="/p" component={ProductionRoute} />
            </Switch>
          </Grid>
        </Grid>
      </HashRouter>
    </div>
  );
}
