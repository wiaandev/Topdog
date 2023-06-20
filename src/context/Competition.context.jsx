import { createContext, useState, useEffect } from "react";

export const CompetitionContext = createContext();

export const CompetitionProvider = ({ children }) => {
  // TODO Setup useStates

  //TODO Setup useEffects

  return (
    <CompetitionContext.Provider value={""}>
      {children}
    </CompetitionContext.Provider>
  );
};
