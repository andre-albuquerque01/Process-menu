"use client";
import React, { useEffect, useRef } from "react";
import pao from '../../../public/pao.jpg';
import like from '../../../public/like.png';
import dislike from '../../../public/dislike.png';
import Image from "next/image";
import Head from 'next/head';
import "./style.css";
import { useState } from 'react';
import { useCarContext } from '../context/CarContext';
import { Product } from "../lib/Product";

export default function Itens() {
    const [qtd, setQtd] = useState<number>(0);
    const [liked, setLiked] = useState<number>(0);
    const [disliked, setDisliked] = useState<number>(0);
    const { car, setCar } = useCarContext();
    const [productData, setproductData] = useState({
        id: '',
        title: '',
        subTitle: '',
        description: '',
        price: '',
        qtd_itens: '',
        observation: '',
        status: '',
        like: '',
        file_name: '',
        categorie: '',
        position: '',
        waitTime: '',
    });

    const product = Product();

    const handleIdUrl = async () => {
        const params = new URLSearchParams(window.location.search);
        const idParms = params.get('id');
        if (idParms === null && idParms === undefined) {
            window.location.href = "/";
        } else {
            const fetchData = await product.fetchData(idParms);
            setproductData(fetchData);
        }
    }

    useEffect(() => {
        handleIdUrl();
        console.log(productData);
    }, []);

    const togglePlus = () => {
        if (qtd < 10) setQtd(qtd + 1);
    }
    const toggleLess = () => {
        if (qtd > 0) setQtd(qtd - 1);
    }

    const toggleLike = () => {
        setLiked(liked + 1);
    }
    const toggleDislike = () => {
        setDisliked(disliked + 1);
    }

    const handleAddItens = (novoItem: typeof car[0]) => {
        const carIndex = car.findIndex(car => car.id === novoItem.id);
        if (carIndex !== -1) {
            const newCar = [...car];
            newCar[carIndex].qtd_itens = qtd;
            setCar(newCar);
            alert("Item inserido ao carrinho")
        } else {
            setCar(prevCar => [...prevCar, { ...novoItem, qtd_itens: qtd }]);
            alert("Item inserido ao carrinho")
        }

    };

    return (
        <div className='itens'>
            <Head>
                <title>Items</title>
            </Head>

            <div className="littleItens">
                <div className="imageItem">
                    <Image
                        src={productData.file_name}
                        alt='imagem do item'
                        width={370}
                        height={300}
                    />
                </div>
                <div className="text">
                    <div className="title">
                        <h2>{productData.title}</h2>
                    </div>
                    <div className="subTitle">
                        <p>{productData.subTitle}</p>
                    </div>
                    <div className="price">
                        <div className="title">
                            Valor:
                        </div>
                        <div className="value">
                            R$ {productData.price}
                        </div>
                    </div>
                    <div className="description">
                        <div className="title">
                            Descrição
                        </div>
                        <div className="textDesc">
                            {productData.description}
                        </div>
                    </div>
                    <div className="timeWait">
                        <div className="title">
                            Tempo de espera:
                        </div>
                        <div className="time">
                            {productData.waitTime}
                        </div>
                    </div>
                    <div className="rate">
                        <div className="title">
                            Avaliação
                        </div>
                        <div className="avaliation">
                            <div className="good">
                                <Image
                                    src={like}
                                    alt='Gostei'
                                    title='Gostou?'
                                    width={28}
                                    height={28}
                                    onClick={toggleLike}
                                />
                                {liked}
                            </div>
                            <div className="bad">
                                <Image
                                    src={dislike}
                                    alt='Não gostei'
                                    title='Não gostou?'
                                    width={28}
                                    height={28}
                                    onClick={toggleDislike}
                                />
                                {disliked}
                            </div>
                        </div>
                    </div>
                    <div className="obs">
                        <div className="title">
                            Observação
                        </div>
                        <div className="field">
                            <textarea name="obs" id="obs" placeholder='Sem trigo'></textarea>
                        </div>
                    </div>
                    <div className="finish">
                        <div className="qtd">
                            <div className="less">
                                <button onClick={toggleLess}>-</button>
                            </div>
                            <div className="number">
                                {qtd}
                            </div>
                            <div className="plus" >
                                <button onClick={togglePlus}>+</button>
                            </div>
                        </div>
                        <div className="btn">
                            <input type="submit" value="Adicionar" onClick={() => handleAddItens({
                                id: String(qtd),
                                title: "string",
                                observation: "string",
                                preco: 10.5,
                                tempo_espera: "string",
                                file_name: "string",
                                qtd_itens: qtd,
                            })} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
