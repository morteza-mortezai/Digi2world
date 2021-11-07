import React, { createContext, useState } from "react";

const Context = createContext({
  users: [],
  setUsers: (users) => {},
});

export { Context };

export default function ContextProvider({ children }) {
  
  //   let { handleOpenAlert } = useContext(AlertContext);
  const [users, setUsers] = useState([]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
