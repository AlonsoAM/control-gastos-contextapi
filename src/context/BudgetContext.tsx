import {Dispatch, useReducer} from "react";
import {
    BudgetActions,
    budgetReducer,
    BudgetState,
    initialBudgetState,
} from "../reducers/budget-reducer";

import {createContext} from "react";
import * as React from "react";

export type BudgetContextType = {
    state: BudgetState;
    dispatch: Dispatch<BudgetActions>;
};

export const BudgetContext = createContext<BudgetContextType>(null!);

export const BudgetProvider = ({children}: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(budgetReducer, initialBudgetState);

    return (
        <BudgetContext.Provider value={{state, dispatch}}>
            {children}
        </BudgetContext.Provider>
    );
};
