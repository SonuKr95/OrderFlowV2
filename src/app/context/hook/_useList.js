import { ListContext } from "../_listContext";
import { useContext } from "react";

function useList() {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("No active list");
  }
  return context;
}

export { useList };
