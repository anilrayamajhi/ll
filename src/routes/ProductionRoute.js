import React from "react";
import { Switch, Route } from "react-router-dom";

import { PagePComponent } from "../components/pages";

function ProductionRoute() {
  return (
    <div>
      <Switch>
        <Route path="/p/:id" exact render={() => <PagePComponent />} />
      </Switch>
    </div>
  );
}

export { ProductionRoute };
