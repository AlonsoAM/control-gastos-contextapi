import { useMemo, useState } from "react";

const BudgetForm = () => {
  const [budget, setBudget] = useState(0);

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(e.target.value));
  };

  const isValid = useMemo(() => {
    return (budget > 0 && budget <= 100000000000) || isNaN(budget);
  }, [budget]);

  return (
    <>
      <form className="space-y-5">
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-4xl text-blue-600 font-bold text-center"
          >
            Definir Presupuesto
          </label>
          <input
            id="budget"
            type="number"
            className="w-full bg-white border border-gray-200 p-2"
            placeholder="Define tu Presupuesto"
            name="budget"
            value={budget}
            onChange={handleBudgetChange}
            min={0}
          />
        </div>

        <input
          type="submit"
          value="Definir Presupuesto"
          className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer p-2 text-white font-black uppercase disabled:opacity-40"
          disabled={!isValid}
        />
      </form>
    </>
  );
};

export default BudgetForm;
