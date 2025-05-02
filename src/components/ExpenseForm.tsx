import {categories} from "../data/categories.ts";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import {useState} from "react";
import {DraftExpense} from "../types";
import * as React from "react";
import Toast from "./Toast"; // Importar el componente Toast
import type { ToastType } from "./Toast"; // Importar el tipo si es necesario o definirlo aquí

const ExpenseForm = () => {
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    });

    const [showToast, setShowToast] = useState(false); // Estado para controlar el Toast
    const [toastMessage, setToastMessage] = useState(""); // Mensaje del Toast
    const [toastType, setToastType] = useState<ToastType>('error'); // Estado para el tipo de Toast ('error' por defecto)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Validar que los campos no estén vacíos
        const errorFields: string[] = [];
        if (expense.expenseName.trim() === '') {
            errorFields.push("Nombre Gasto");
        }
        if (expense.amount <= 0) {
            errorFields.push("Cantidad");
        }
        if (expense.category.trim() === '') {
            errorFields.push("Categoría");
        }

        if (errorFields.length > 0) {
            let message: string;
            if (errorFields.length === 1) {
                message = `El campo ${errorFields[0]} es obligatorio.`;
            } else {
                message = `Los campos ${errorFields.join(', ')} son obligatorios.`;
            }
            setToastMessage(message); // Establecer mensaje detallado
            setToastType('error'); // Establecer tipo error
            setShowToast(true); // Mostrar Toast
            setTimeout(() => setShowToast(false), 5000); // Cerrar Toast automáticamente
            return;
        }

        // Si la validación pasa
        setToastMessage('¡Gasto registrado correctamente!'); // Mensaje de éxito
        setToastType('success'); // Establecer tipo success
        setShowToast(true); // Mostrar Toast
        setTimeout(() => setShowToast(false), 3000); // Cerrar Toast automáticamente

        console.log('Todo bien..');
        // Aquí iría la lógica para guardar el gasto
        // Limpiar formulario (opcional)
        setExpense({
            expenseName: '',
            amount: 0,
            category: '',
            date: new Date()
        });
    };

    return (
        <>
            {showToast && <Toast message={toastMessage} type={toastType} />} {/* Pasar el tipo al Toast */}
            <form className={'space-y-5'} onSubmit={handleSubmit}>
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
    );
};

export default ExpenseForm;

