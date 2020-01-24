import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";

import ListComponent from "./ListComponent";

import { CollapseComponent } from ".";
import { Link } from "react-router-dom";
import { useStore } from "../hooks";

const useStyles = makeStyles({
  list: {
    width: "400px"
  },
  fullList: {
    width: "auto"
  }
});

export default function DrawerLeft() {
  const classes = useStyles();
  const { preProduction, production } = useStore();
  const [open, setOpen] = useState(false);
  const [openProduction, setOpenProduction] = useState(false);
  const [openPreProduction, setOpenPreProduction] = useState(false);
  const main = [
    {
      nav: "Pre Production",
      val: preProduction,
      state: openProduction,
      setState: setOpenProduction,
      uri: "/pp/"
    },
    {
      nav: "Production",
      val: production,
      state: openPreProduction,
      setState: setOpenPreProduction,
      uri: "/p/"
    }
  ];

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const handleClick = (state, setState) => setState(!state);

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        edge="start"
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div className={classes.list} onKeyDown={toggleDrawer(false)}>
          <Link to="/">
            <ListItem button>
              <ListItemText primary={"Home"} onClick={toggleDrawer(false)} />
            </ListItem>
          </Link>
          {main.map((el, key) => {
            return (
              <div key={key}>
                <ListComponent
                  open={el.state}
                  onClick={() => handleClick(el.state, el.setState)}
                  array={[el]}
                />
                <CollapseComponent open={el.state}>
                  <ListComponent
                    array={el.val}
                    uri={el.uri}
                    onClick={toggleDrawer(false)}
                  />
                </CollapseComponent>
              </div>
            );
          })}
        </div>
      </SwipeableDrawer>
    </>
  );
}
