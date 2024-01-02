"use client";
import Image from "next/image";
import "./style.css";
import { Order } from "../lib/Order";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function BackOrder() {
    const [data, setData] = useState([]);
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const order = Order();

    const handleLogout = () => {
        if (cookies.token === undefined) {
            window.location.href = '/User/Login';
        }
    }

    const handleGetOrder = async () => {
        const fetchDataMyOrder = await order.fetchGetByUserOrders();
        setData(fetchDataMyOrder);
    }

    useEffect(() => {
        handleGetOrder();
        handleLogout();
    }, []);

    const updateDate = (updateAt: string) => {
        const dateUpdate = new Date(Date.parse(updateAt));
        const formattedDate = dateUpdate.toISOString().split('T')[0].split('-').reverse().join('/') + ' ' +
            dateUpdate.toISOString().split('T')[1].split('.')[0];
        return formattedDate;
     }
     
    return (
        <div className="ordersEnd">
            <div className="titleMyOrders">
                Meus pedidos
            </div>
            {data && data.length > 0 ? (data.map((itens) => (
                <div className="dadOrderClient" key={itens.id}>
                    <div className="orderCard">
                        <div className="informationOrder">
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
                                        <div className="qtdOrder">Quantidade: {product.qtd_itens}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="segPart">
                            {itens.status !== 'Aberto' ? (
                                <div className="finishOrder">
                                    <div className="finishedOrder">
                                        Concluído em:
                                    </div>
                                    <div className="dataFinishedOrder">
                                        {updateDate(itens.update_at)}
                                    </div>
                                </div>
                            ) : (
                                <div className="finishOrder">
                                    <div className="finishedOrder">
                                        Aberto em:
                                    </div>
                                    <div className="dataFinishedOrder">
                                        {updateDate(itens.update_at)}
                                    </div>
                                </div>
                            )}
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
                    <div className="orderEnd">
                        <div className="numberOrderCard">
                            <div className="titleNumberOrder">
                                Número do pedido
                            </div>
                            <div className="valueNumberOrder">
                                {itens.numberOrder}
                            </div>
                        </div>
                        <div className="tableOrderCard">
                            <div className="titleTableOrder">
                                Número da mesa
                            </div>
                            <div className="valueTableOrder">
                                {itens.table}
                            </div>
                        </div>
                    </div>
                </div>
            ))) : <div className="nothingOrderClient"><h1>Nenhum produto encontrado</h1></div>}
        </div>
    );
}