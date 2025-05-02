import {categories} from "../data/categories.ts";

const ExpenseForm = () => {
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
                    />
                </div>
                <div className={'flex flex-col gap-2'}>
                    <label className={'text-xl'} htmlFor={'category'}>
                        Categoría
                    </label>
                    <select id={'category'}
                            className={'bg-slate-100 p-2 '}
                            name={'category'}
                    >
                        <option value="">Seleccione</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <input type="submit"
                       className={'bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg'}
                       value={'Registrar Gasto'}/>
            </form>
        </>
    )
}
export default ExpenseForm
