import { createContext, useState } from "react";

const ActiveTabContext = createContext();

function ActiveTabProvider({ children }) {
  const [activeTab, setActiveTab] = useState("saved");

  const value = {
    activeTab,
    setActiveTab,
  };

  return (
    <ActiveTabContext.Provider value={value}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export { ActiveTabProvider };
export default ActiveTabContext;
