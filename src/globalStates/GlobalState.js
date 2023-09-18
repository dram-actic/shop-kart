import React, { useState } from "react";

export const globalContext = React.createContext();

export function GlobalContextProvider(props) {
  const [gState, setGstate] = useState("close");

  const setNewGState = (newState) => {
    setGstate(newState);
  };

  return (
    <globalContext.Provider
      value={{
        gState,
        setNewGState,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
