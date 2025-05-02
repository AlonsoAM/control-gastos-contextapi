import {categories} from "../data/categories.ts";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useState} from "react";
import {DraftExpense} from "../types";

const ExpenseForm = () => {

    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    })

    return (
        <>
            <form className={'space-y-5'}>
                <legend className={'uppercase text-center text-2xl font-black border-b-4 border-blue-500 p-2'}>
                    Nuevo Gasto
                </legend>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-xl'} htmlFor='expenseName'>
                        Nombre Gasto
                    </label>
                    <input type="text"
                           id={'expenseName'}
                           placeholder={'Agrega el nombre de un gasto'}
                           className={'bg-slate-100 p-2 '}
                           name={'expenseName'}
                           value={expense.expenseName}
                           onChange={(e) => setExpense({
                               ...expense,
                               expenseName: e.target.value
                           })} // Update the state with the new value

                    />
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-xl'} htmlFor='amount'>
                        Cantidad
                    </label>
                    <input type="number"
                           id={'amount'}
                           placeholder={'Agrega la cantidad del gasto. Ej. 300'}
                           className={'bg-slate-100 p-2 '}
                           name={'amount'}
                           value={expense.amount}
                           onChange={(e) => setExpense({
                               ...expense,
                               amount: Number(e.target.value)
                           })} // Update the state with the new value
                    />
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-xl'} htmlFor={'category'}>
                        Categoría
                    </label>
                    <select id={'category'}
                            className={'bg-slate-100 p-2 '}
                            name={'category'}
                            value={expense.category}
                            onChange={(e) => setExpense({
                                ...expense,
                                category: e.target.value
                            })} // Update the state with the new value
                    >
                        <option value="">Seleccione</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                </div>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-xl'} htmlFor='amount'>
                        Fecha Gasto:
                    </label>
                    <DatePicker
                        className={'bg-slate-100 p-2 border-0'}
                        value={expense.date}
                        onChange={(date) => setExpense({
                            ...expense,
                            date: date
                        })} // Update the state with the new value
                    />
                </div>
                <input type="submit"
                       className={'bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg'}
                       value={'Registrar Gasto'}/>
            </form>
        </>
    )
}
export default ExpenseForm
