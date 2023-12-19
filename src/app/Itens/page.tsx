"use client";
import React from "react";
import pao from '../../../public/pao.jpg'
import like from '../../../public/like.png'
import dislike from '../../../public/dislike.png'
import Image from "next/image"
import Head from 'next/head'
import "./style.css"
import { useState } from 'react'
import { useCarContext } from '../context/CarContext'

export default function Itens() {
    const [qtd, setQtd] = useState<number>(0);
    const [liked, setLiked] = useState<number>(0);
    const [disliked, setDisliked] = useState<number>(0);
    const { car, setCar } = useCarContext();
    console.log(car);

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
                        src={pao}
                        alt='imagem do item'
                    />
                </div>
                <div className="text">
                    <div className="title">
                        <h2>Pão caseiro</h2>
                    </div>
                    <div className="price">
                        R$ 5
                    </div>
                    <div className="description">
                        <div className="title">
                            Descrição
                        </div>
                        <div className="textDesc">
                            Contém proteina animal, gluten, lactose;
                        </div>
                    </div>
                    <div className="timeWait">
                        <div className="title">
                            Tempo de espera:
                        </div>
                        <div className="time">
                            5 min
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
