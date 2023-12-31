"use client";
import Image from "next/image";
import "./style.css";
import pao from "../../../public/pao.jpg";
import { Order } from "../lib/Order";
import { useEffect, useState } from "react";

export default function BackOrder() {
    const [data, setData] = useState([]);
    const order = Order();

    const handleGetOrder = async () => {
        const fetchDataMyOrder = await order.fetchGetByUserOrders();
        setData(fetchDataMyOrder);
        console.log(fetchDataMyOrder);
    }

    useEffect(() => {
        handleGetOrder();
    }, [])

    const updateDate = (updateAt: string) => {
        const dateUpdate = new Date(Date.parse(updateAt));
        const formattedDate = ('0' + (dateUpdate.getMonth() + 1)).slice(-2) + '/' +
            ('0' + dateUpdate.getDate()).slice(-2) + '/' +
            dateUpdate.getFullYear() + ' ' +
            ('0' + dateUpdate.getHours()).slice(-2) + ':' +
            ('0' + dateUpdate.getMinutes()).slice(-2) + ':' +
            ('0' + dateUpdate.getSeconds()).slice(-2);
        return formattedDate;
    }


    return (
        <div className="ordersEnd">
            <div className="titleMyOrders">
                Meus pedidos
            </div>
            {data && data.map((itens) => (
                <div className="orderCard" key={itens.id}>
                    <div className="informationOrder" >
                        {itens.products && itens.products.map((product) => (
                            <div className="orderInfo" key={product.id}>
                                <div className="imageOrder">
                                    <Image
                                        src={product.file_name}
                                        width={120}
                                        height={120}
                                        alt="Imagem do pedido" />
                                </div>
                                <div className="descOrder">
                                    <div className="titleOrder">{product.title}</div>
                                    <div className="priceOrder">R$ {product.price}</div>
                                    <div className="statusOrder">{product.status}</div>
                                    <div className="qtdOrder">Quantidade: {product.qtd_itens}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="segPart">
                        <div className="finishOrder">
                            <div className="finishedOrder">
                                Concluído em:
                            </div>
                            <div className="dataFinishedOrder">
                                {updateDate(itens.update_at)}
                            </div>
                        </div>
                        <div className="valueTotalOrder">
                            <div className="priceValueTotal">
                                Valor total:
                            </div>
                            <div className="priceValueEnd">
                                R$ {itens.precoTotal}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}