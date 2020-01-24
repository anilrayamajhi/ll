import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

import { useStore } from "../../hooks";

const useStyles = makeStyles({
  root: {
    fontSize: "3rem"
  }
});

function PagePComponent() {
  const params = useParams(),
    classes = useStyles(),
    { production } = useStore(),
    val = production.filter(el => el._id === params.id)[0],
    { nav } = val;

  return <div className={classes.root}>{nav}</div>;
}

export { PagePComponent };
