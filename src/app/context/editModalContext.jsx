import { createContext, useState } from "react";

//Creating the context with default value

const EditModalContext = createContext();

// Creating a Provider
function EditModalProvider({ children }) {
  const [editModalClicked, seteditModalClicked] = useState(false);

  function toggleEditModal() {
    seteditModalClicked((editModalClicked) => !editModalClicked);
  }

  return (
    <EditModalContext.Provider value={{ editModalClicked, toggleEditModal }}>
      {children}
    </EditModalContext.Provider>
  );
}

export { EditModalProvider, EditModalContext };
