import { useContext, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
