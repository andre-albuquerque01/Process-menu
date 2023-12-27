import Head from "next/head"
import "./style.css"
import { useState } from "react";
import { Product } from "@/app/lib/Product";

export default function CadProduct() {
    const product = Product();
    const [data, setData] = useState({
        title: '',
        description: '',
        qtd_itens: '',
        observation: '',
        preco: '',
        tempo_espera: '',
        status: '',
        categorie: '',
        position: '',
    });

    const [dataImg, setDataImg] = useState({
        file_name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleChangeImg = (e) => {
        const { name, value } = e.target;
        setDataImg((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await product.fetchRegisterImage(file_name: dataImg);
        setTimeout(() => {
            await product.fetchRegisterProduct(body: data);
        }, 200);
    }

    return (
        <div className="product">
            <Head>
                <title>Cadastro do produto</title>
            </Head>
            <div className="titleproduct">
                <h2>Cadastrar produto</h2>
            </div>
            <form encType="multipart/form-data">
                <div className="formProduct">
                    <div className="productTitle">
                        <div className="labelTitle">
                            <label htmlFor="title">Título: <span>*</span></label>
                        </div>
                        <div className="inputTitle">
                            <input type="text" name="title" id="title" value={data.title} onChange={handleChange} placeholder="Pão" required />
                        </div>
                    </div>
                    <div className="productDescription">
                        <div className="labelTitle">
                            <label htmlFor="description">Descrição: <span>*</span></label>
                        </div>
                        <div className="inputDescription">
                            <textarea name="description" id="description" placeholder="Modo de preparo" value={data.description} onChange={handleChange} required></textarea>
                        </div>
                    </div>
                    <div className="productQtd">
                        <div className="labelTitle">
                            <label htmlFor="Qtd">Quantidade de itens: <span>*</span></label>
                        </div>
                        <div className="inputQtd">
                            <input type="number" name="Qtd" id="Qtd" min="0" placeholder="Quantos itens têm disponível" value={data.qtd_itens} onChange={handleChange} required />
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
                            <label htmlFor="Price">Preço: <span>*</span></label>
                        </div>
                        <div className="inputPrice">
                            <input type="number" name="Price" id="Price" step="0.1" placeholder="5.5" min="0" value={data.title} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="productTime">
                        <div className="labelTitle">
                            <label htmlFor="Time">Tempo de espera: <span>*</span></label>
                        </div>
                        <div className="inputTime">
                            <input type="text" name="Time" id="Time" min="0" placeholder="5 minutos" value={data.tempo_espera} onChange={handleChange} required />
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
                            <label htmlFor="Position">Posição: <span>*</span></label>
                        </div>
                        <div className="inputPosition">
                            <select id="Position" name="Position" value={data.position} onChange={handleChange} required>
                                <option defaultValue={0}>Selecione a posição</option>
                                <option value="carrossel">Carrossel</option>
                                <option value="entrada">Entrada</option>
                                <option value="pesquisa">Pesquisa</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFile">
                        <div className="labelTitle">
                            <label htmlFor="File">Imagem: <span>*</span></label>
                        </div>
                        <div className="inputFile">
                            <input type="file" name="File" id="File" value={dataImg.file_name} onChange={handleChangeImg} required />
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