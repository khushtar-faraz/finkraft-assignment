import React, { useState } from "react";
import { createContext, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [columnDef, setColumnDef] = useState([]);
  const [apiUrl, setApiUrl] = useState("");

  console.log(columnDef);
  console.log(apiUrl);

  return (
    <StateContext.Provider value={{apiUrl, setApiUrl, columnDef, setColumnDef}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStatevalue = () => useContext(StateContext);
