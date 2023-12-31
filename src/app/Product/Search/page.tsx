"use client";
import Image from "next/image";
import "./style.css";
import timer from "../../../../public/timer.png";
import { Product } from "@/app/lib/Product";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Search() {
    const product = Product();
    const [data, setData] = useState<string[]>([]);
    const [nameSearch, setNameSearch] = useState('');
    const [state, setState] = useState<boolean>(false);
    const [query, setQuery] = useState('');
    
    const fetchSearchCategory = async (category) => {
        const fetchSearchCategory = await product.fetchSearchCategory(category);
        setData(fetchSearchCategory);
    }

    const fetchSearchProduct = async (search) => {
        const fetchSearchProduct = await product.fetchSearchProduct(search);
        setData(fetchSearchProduct);
    }

    const fetchAllData = async () => {
        const fetchAllData = await product.fetchProduct();
        setData(fetchAllData);
    }

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleIdUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const categoryParms = params.get('category');
        const searchParms = params.get('search');
        if ((searchParms === '' && categoryParms !== '') || (searchParms === null && categoryParms !== null)) {
            fetchSearchCategory(categoryParms);
            setNameSearch(`Categoria -> ${categoryParms?.toUpperCase()}`);
            setState(true);
        } else if ((searchParms !== '' && categoryParms === '') || (searchParms !== null && categoryParms === null)) {
            const upCaseSearchParam = capitalizeFirstLetter(searchParms);
            fetchSearchProduct(upCaseSearchParam);
            setNameSearch(upCaseSearchParam);
            setState(true);
        } else {
            fetchAllData();
            setNameSearch('Geral');
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        setQuery(params.toString());
    });
    
    useEffect(() => {
        handleIdUrl();
    }, []);

    useEffect(() => {
        handleIdUrl();
    }, [query]);

    useEffect(() => {
        if (state) {
            handleIdUrl();
            setState(false)
        }
    }, [state]);

    return (
        <div className="centralSearch">
            <div className="searchTitle">
                <p>Pesquisado: {nameSearch}</p>
            </div>
            {data && data.length > 0 ? data.map((datas, index) => (
                <div className="cardProduct" key={index}>
                    <div className="card" >
                        <Link href={`/Itens?id=${datas.id}`} >
                            <div className="imageSearch">
                                <Image
                                    src={datas.file_name}
                                    alt="Image do produto"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div className="corpCard">
                                <div className="titleCar" title="Título do porudo">
                                    <h3>
                                        {datas.title}
                                    </h3>
                                </div>
                                <div className="subTitle" title="Subtítulo do produto">
                                    {datas.subTitle}
                                </div>
                                <div className="priceCar" title="Preço do produto">
                                    {datas.price}
                                </div>
                                <div className="temp" title="Tempo de espera">
                                    <Image
                                        src={timer}
                                        width={18}
                                        height={18}
                                        alt="Temporizado" />
                                    {datas.waitTime} minutos
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            )) : <div className="nothingProdcut"><h1>Nenhum produto encontrado</h1></div>}
        </div >
    );
}