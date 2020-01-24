import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

function ListComponent({ array, onClick, open, uri }) {
  const hasURI = !!uri;

  const listItem = el => (
    <ListItem key={`${el._id}-${el.nav}`} button onClick={onClick}>
      <ListItemText primary={el.nav} />
      {!hasURI && (open ? <ExpandLess /> : <ExpandMore />)}
    </ListItem>
  );

  return (
    <List>
      {hasURI
        ? array.map(el => (
            <Link
              to={`${uri}${el._id}`}
              key={`${el._id}-${el.nav}`}
              onClick={onClick}
            >
              {listItem(el)}
            </Link>
          ))
        : array.map(el => listItem(el))}
    </List>
  );
}

ListComponent.propTypes = {
  array: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  uri: PropTypes.string
};

export default ListComponent;
