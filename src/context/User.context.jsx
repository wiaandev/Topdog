import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // TODO Setup useStates

  //TODO Setup useEffects

  return <UserContext.Provider value={""}>{children}</UserContext.Provider>;
};
