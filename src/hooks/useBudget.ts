import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";

export const useBudget = () => {
  const { state, dispatch } = useContext(BudgetContext);

  const addBudget = (budget: number) => {
    dispatch({ type: "ADD_BUDGET", payload: { budget } });
  };

  return {
    budget: state.budget,
    addBudget,
  };
};
