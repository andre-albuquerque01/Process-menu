import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface Product {
    id: string;
    title: string;
    observation: string;
    preco: number;
    tempo_espera: string;
    file_name: string;
    qtd_itens: number;
}

interface ProductContextType {
    car: Product[];
    setCar: Dispatch<SetStateAction<Product[]>>;
}

const CarContext = createContext<ProductContextType | undefined>(undefined);

interface CarProviderProps {
    children: ReactNode;
}

export const CarProvider: React.FC<CarProviderProps> = ({ children }) => {
    const [car, setCar] = useState<Product[]>([]);


    return (
        <CarContext.Provider value={{ car, setCar}} >
            {children}
        </ CarContext.Provider>
    );
};

export const useCarContext = () => {
    const context = useContext(CarContext);
    if (context == null) throw new Error("useCarContext deve ser usado dentro de um CarProvider.")
    return context;
}