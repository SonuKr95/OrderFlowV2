import { createContext, useState } from "react";

//Creating the context with default value

const ListContext = createContext();

// Creating a Provider
function ListProvider({ children }) {
  const [list, setList] = useState(null);

  function changeActiveList(listName) {
    setList(listName);
  }

  return (
    <ListContext.Provider value={{ list, changeActiveList }}>
      {children}
    </ListContext.Provider>
  );
}

export { ListProvider, ListContext };
