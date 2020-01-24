import React from "react";

import Collapse from "@material-ui/core/Collapse";

function CollapseComponent({ children, open }) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      {children}
    </Collapse>
  );
}

export { CollapseComponent };
