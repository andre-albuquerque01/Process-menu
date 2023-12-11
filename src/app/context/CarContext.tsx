import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface Product {
    id: string;
    title: string;
    description: string;
    observation: string;
    preco: string;
    tempo_espera: string;
    file_name: string;
    categoria: string;
}

interface ProductContextType {
    car: Product[]
    setCar: Dispatch<SetStateAction<Product[]>>
}

const CarContext = createContext<ProductContextType | undefined>(undefined);

interface CarProviderProps {
    children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
    const [car, setCar] = useState<Product[]>([]);

    return (
        <CarContext.Provider value={{ car, setCar }} >
            {children}
        </ CarContext.Provider>
    );
};

export const useCar = () => {
    const context = useContext(CarContext);
    if (context == null) throw new Error("useCar deve ser usado dentro de um CarProvider.")
    return context;
}