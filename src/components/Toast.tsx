import React from "react";
import '../styles/Toast.css'; // Asegúrate de importar el CSS

// Definir los tipos de Toast posibles
export type ToastType = 'success' | 'error';

interface ToastProps {
    message: string;
    type: ToastType; // Añadir la propiedad type
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
    // Determinar clases y icono según el tipo
    const isError = type === 'error';
    const baseClasses = "fixed top-5 right-5 bg-white text-gray-800 p-4 rounded-lg shadow-xl flex items-center gap-3 animate-fade-in-out overflow-hidden border-l-4";
    const typeClasses = isError ? "border-red-500" : "border-green-500";
    const iconColor = isError ? "text-red-500" : "text-green-500";
    const progressBg = isError ? "bg-red-200" : "bg-green-200";
    const progressBar = isError ? "bg-red-500" : "bg-green-500";

    const Icon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isError ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> // Icono de error
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> // Icono de éxito
            )}
        </svg>
    );

    return (
        <div className={`${baseClasses} ${typeClasses}`}>
            <Icon />
            <span className="font-medium">{message}</span>
            {/* Barra de progreso */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${progressBg}`}>
                <div className={`h-full ${progressBar} animate-progress`}></div>
            </div>
        </div>
    );
};

export default Toast;
