import { createContext } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const userData = {
    name: "mukesh",
    age: 23,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
