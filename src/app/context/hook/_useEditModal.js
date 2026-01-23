import { EditModalContext } from "../_editModalContext";
import { useContext } from "react";

function useEditModal() {
  const context = useContext(EditModalContext);
  if (!context) {
    throw new Error("Please click the edit button");
  }
  return context;
}

export default useEditModal;
