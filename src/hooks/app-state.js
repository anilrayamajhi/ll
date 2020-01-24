import React, { createContext, useContext } from "react";

import { preProduction, production } from "../seeds";

const AppContext = createContext();

function StoreProvider({ state = { preProduction, production }, children }) {
  return <AppContext.Provider value={state} children={children} />;
}

const useStore = () => useContext(AppContext);

export { StoreProvider, useStore };
