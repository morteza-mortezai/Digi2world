import React, { createContext, useState } from "react";
const MasterContext = createContext({
  aboutScrollName: [],
  setAboutScrollName: () => {},
  servicesModal: [],
  setServicesModal: () => {},
});

export { MasterContext };

export default function MasterContextProvider({ children }) {
  const [aboutScrollName, setAboutScrollName] = useState("");
  const [servicesModal, setServicesModal] = useState(false);

  return (
    <MasterContext.Provider
      value={{
        aboutScrollName,
        setAboutScrollName,
        servicesModal,
        setServicesModal,
      }}
    >
      {children}
    </MasterContext.Provider>
  );
}
