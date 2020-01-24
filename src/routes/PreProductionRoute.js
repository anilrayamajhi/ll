import React from "react";
import { Switch, Route } from "react-router-dom";

import { PagePPComponent } from "../components/pages";

function PreProductionRoute() {
  return (
    <div>
      <Switch>
        <Route path="/pp/:id" exact render={() => <PagePPComponent />} />
      </Switch>
    </div>
  );
}

export { PreProductionRoute };
