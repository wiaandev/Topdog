import { createContext, useState, useEffect, Children } from "react";
import { getAllCompetitions, getSingleCompetition } from "../services/firebase-db";

export const CompetitionContext = createContext();

export const CompetitionProvider = ({ children }) => {
  const [competitions, setCompetitions] = useState();

  useEffect(() => {
    const data = async () => {
      const retrieved = await getAllCompetitions();
      setCompetitions(retrieved);
      console.log(competitions);
    };
    data();
  }, []);

  return (
    <CompetitionContext.Provider value={competitions}>
      {children}
    </CompetitionContext.Provider>
  );
};
