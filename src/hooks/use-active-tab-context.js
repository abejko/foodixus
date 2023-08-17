import { useContext } from "react";
import ActiveTabContext from "../context/ActiveTabContext";

export function useActiveTabContext() {
  return useContext(ActiveTabContext);
}
