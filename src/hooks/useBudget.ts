import {useContext} from "react";
import {BudgetContext} from "../context/BudgetContext";

export const useBudget = () => {
    const {state, dispatch} = useContext(BudgetContext);

    const addBudget = (budget: number) => {
        dispatch({type: "ADD_BUDGET", payload: {budget}});
    };
    const toggleModal = () => {
        dispatch({type: "SHOW_MODAL"});
    };

    const hideModal = () => {
        dispatch({type: "HIDE_MODAL"});
    };

    return {
        budget: state.budget,
        addBudget,
        showModal: state.showModal,
        toggleModal,
        hideModal
    };
};
