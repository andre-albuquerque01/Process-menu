"use client";
import Head from "next/head";
import "./style.css"
import { useEffect, useState } from "react";
import { Product } from "@/app/lib/Product";
import { useCookies } from "react-cookie";

export default function EditProduct() {
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const product = Product();
    const [data, setData] = useState({
        id: '',
        title: '',
        subTitle: '',
        description: '',
        qtd_itens: '',
        observation: '',
        price: '',
        status: '',
        waitTime: '',
        categorie: '',
        position: '',
        file_name: ''
    });

    const handleLogout = () => {
        if (cookies.token === undefined) {
            alert('Necessário fazer login');
            window.location.href = '/User/Login';
        }else if(cookies.user !== "A"){
            alert('Necessário de autorização');
            window.location.href = '/';
        }
    }
    
    const fetchData = async () => {
        const params = new URLSearchParams(window.location.search);
        const idParms = params.get('id');
        const fetchData = await product.fetchData(idParms);
        setData(fetchData);
    }
    
    useEffect(() => {
        handleLogout();
        fetchData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await product.fetchAlt({ id: data.id, body: data } as Product);
    }

    return (
        <div className="product">
            <Head>
                <title>Editar o produto</title>
            </Head>
            <div className="titleproduct">
                <h2>Edição do produto, <u>{data.title}</u></h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="formProduct">
                    <div className="productTitle">
                        <div className="labelTitle">
                            <label htmlFor="title">Título: <span>*</span></label>
                        </div>
                        <div className="inputTitle">
                            <input type="text" name="title" id="title" value={data.title} onChange={handleChange} placeholder="Pão" required />
                        </div>
                    </div>
                    <div className="productSubTitle">
                        <div className="labelTitle">
                            <label htmlFor="subtitle">Subtítulo: <span>*</span></label>
                        </div>
                        <div className="inputSubTitle">
                            <input type="text" name="subTitle" id="subTitle" value={data.subTitle} onChange={handleChange} placeholder="Pão" required />
                        </div>
                    </div>
                    <div className="productDescription">
                        <div className="labelTitle">
                            <label htmlFor="description">Descrição: <span>*</span></label>
                        </div>
                        <div className="inputDescription">
                            <textarea name="description" id="description" placeholder="Descrição dos ingredientes" value={data.description} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <div className="productQtd">
                        <div className="labelTitle">
                            <label htmlFor="qtd_itens">Quantidade de itens: <span>*</span></label>
                        </div>
                        <div className="inputQtd">
                            <input type="number" name="qtd_itens" id="qtd_itens" min="0" placeholder="Quantos itens têm disponível" value={data.qtd_itens} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="productObservation">
                        <div className="labelTitle">
                            <label htmlFor="observation">Observação: <span>*</span></label>
                        </div>
                        <div className="inputObservation">
                            <textarea name="observation" id="observation" placeholder="Contêm glúten" value={data.observation} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <div className="productPrice">
                        <div className="labelTitle">
                            <label htmlFor="preco">Preço: <span>*</span></label>
                        </div>
                        <div className="inputPrice">
                            <input type="number" name="price" id="price" step="0.1" placeholder="R$ 5.5" min="0" value={data.price} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="productTime">
                        <div className="labelTitle">
                            <label htmlFor="tempo_espera">Tempo de espera: <span>*</span> (Apenas os minutos)</label>
                        </div>
                        <div className="inputTime">
                            <input type="text" name="waitTime" id="waitTime" min="0" placeholder="5 minutos" value={data.waitTime} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="productCategorie">
                        <div className="labelTitle">
                            <label htmlFor="Categorie">Categoria: <span>*</span></label>
                        </div>
                        <div className="inputCategorie">
                            <select id="categorie" name="categorie" value={data.categorie} onChange={handleChange} required>
                                <option defaultValue={0}>Selecione a categoria</option>
                                <option value="promocao">Promoções</option>
                                <option value="pizza">Pizza</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                                <option value="lanches">Lanches</option>
                                <option value="jantas">Jantas</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                    <div className="productPosition">
                        <div className="labelTitle">
                            <label htmlFor="position">Posição: <span>*</span></label>
                        </div>
                        <div className="inputPosition">
                            <select id="position" name="position" value={data.position} onChange={handleChange} required>
                                <option defaultValue={0}>Selecione a posição</option>
                                <option value="carrossel">Carrossel</option>
                                <option value="entrada">Entrada</option>
                                <option value="pesquisa">Pesquisa</option>
                            </select>
                        </div>
                    </div>
                    <div className="productStatus">
                        <div className="labelTitle">
                            <label htmlFor="status">Está disponível: <span>*</span></label>
                        </div>
                        <div className="inputStatus">
                            <select id="status" name="status" value={data.status} onChange={handleChange} required>
                                <option defaultValue={0}>Selecione a posição</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFile">
                        <div className="labelTitle">
                            <label htmlFor="file_name">Link da imagem: <span>*</span></label>
                        </div>
                        <div className="inputFile">
                            <input type="text" name="file_name" id="file_name" value={data.file_name} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="btnProduct">
                        <input type="submit" value="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}