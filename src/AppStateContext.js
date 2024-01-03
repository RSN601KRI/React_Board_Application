import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

// since the site has 2 states to maintain
// we can create an AppState
// that encapsulates the state information around the site
// and can be passed down to different components

export const AppStateProvider = ({ children }) => {
  // setting default state for the site
  const initialState = {
    grouping: "status",
    ordering: "priority",
  };

  // checking if there exists "appState" in local storage
  const savedState = JSON.parse(localStorage.getItem("appState"));
  const [selectedOptions, setSelectedOptions] = useState(
    savedState || initialState
  );

  // updating selected options
  const updateSelectedOptions = (grouping, ordering) => {
    const newSelectedOptions = { grouping, ordering };
    setSelectedOptions(newSelectedOptions);

    // saving "useState" into an "appState" at local storage of browser
    localStorage.setItem("appState", JSON.stringify(newSelectedOptions));
  };

  return (
    <AppStateContext.Provider
      value={{ selectedOptions, updateSelectedOptions }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
