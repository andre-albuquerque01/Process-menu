"use client";
import Image from "next/image";
import trash from "../../../../public/trash.png";
import edit from "../../../../public/edit.png";
import "./style.css";
import timer from "../../../../public/timer.png";
import { Product } from "@/app/lib/Product";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function Alt() {
    const product = Product();
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const [data, setData] = useState<string[]>([]);
    const [state, setState] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 15;

    const handleLogout = () => {
        if (cookies.token === undefined) {
            alert('Necessário fazer login');
            window.location.href = '/User/Login';
        } else if (cookies.user !== "A") {
            alert('Necessário de autorização');
            window.location.href = '/';
        }
    }

    const fetchAllData = async () => {
        const fetchAllData = await product.fetchProduct();
        setData(fetchAllData);
    }

    const handleDelete = async (id: string) => {
        // e.preventDefault();
        alert('Produto removido')
        await product.fetchDelete(id);
        setState(true)
    }

    useEffect(() => {
        handleLogout();
        fetchAllData();
    }, []);

    useEffect(() => {
        if (state) {
            fetchAllData();
            setState(false)
        }
    }, [state]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="centralSearchAlt">
            <div className="searchTitleAlt">
                <p>Produtos cadastrados</p>
                <Link href="/Product/Cad">Cadastrar produto</Link>
            </div>
            {currentItems && currentItems.length > 0 ? currentItems.map((datas, index) => (datas.status && (
                <div className="cardProductAlt" key={index}>
                    <div className="cardAlt" >
                        <Link href={`/Itens?id=${datas.id}`} >
                            <div className="etapa1">

                                <div className="imageSearchAlt">
                                    <Image
                                        src={datas.file_name}
                                        alt="Image do produto"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                                <div className="corpCardAlt">
                                    <div className="titleCarAlt" title="Título do porudo">
                                        <h3>
                                            {datas.title}
                                        </h3>
                                    </div>
                                    <div className="subTitleAlt" title="Subtítulo do produto">
                                        {datas.subTitle}
                                    </div>
                                    <div className="priceCarAlt" title="Preço do produto">
                                        R$ {datas.price}
                                    </div>
                                    <div className="tempAlt" title="Tempo de espera">
                                        <Image
                                            src={timer}
                                            width={18}
                                            height={18}
                                            alt="Temporizado" />
                                        {datas.waitTime} minutos
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="imageAlt">
                            <Link href={`/Product/Edit?id=${datas.id}`}>
                                <Image
                                    src={edit}
                                    alt="Editar o produto"
                                    width={28}
                                    height={28}
                                    title="Editar o produto"
                                />
                            </Link>
                            <Image
                                src={trash}
                                alt="Excluir o produto"
                                width={28}
                                height={28}
                                title="Excluir o produto"
                                onClick={() => handleDelete(datas.id)}
                            />
                        </div>
                    </div>
                </div>
            ))) : <div className="nothingProdcutAlt"><h1>Nenhum produto encontrado</h1></div>}
            <div className="paginationList">
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Anterior</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>Próximo</button>
            </div>
        </div >
    );
}