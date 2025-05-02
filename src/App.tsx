import BudgetForm from "./components/BudgetForm";
import {useBudget} from "./hooks/useBudget.ts";
import {useMemo} from "react";
import BudgetTracker from "./components/BudgetTracker.tsx";

function App() {

    const {budget} = useBudget();
    const isvValidBudget = useMemo(() => budget > 0 && budget <= 100000000000, [budget]);


    return (
        <>
            <header className="bg-blue-600 py-8 max-h-72">
                <h1 className="uppercase text-center font-black text-4xl text-white">
                    Planificador de Gastos
                </h1>
            </header>
            <div className="max-w-3xl mx-auto bg-white shadow-lg mt-10 p-10 rounded-lg">
                {isvValidBudget ? <BudgetTracker/> : <BudgetForm/>}
            </div>
        </>
    );
}

export default App;
