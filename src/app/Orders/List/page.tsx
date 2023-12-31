"use client";
import Image from "next/image";
import "./style.css";
import { Order } from "../../lib/Order";
import { useEffect, useState } from "react";
import check from "../../../../public/check.png";
import { useCookies } from "react-cookie";

export default function BackOrder() {
    const [data, setData] = useState([]);
    const [state, setState] = useState<boolean>(false);
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const order = Order();

    const handleLogout = () => {
        if (cookies.token === undefined)
            window.location.href = '/User/Login';
    }

    const handleGetOrder = async () => {
        const fetchGetAllOrders = await order.fetchGetAllOrders();
        setData(fetchGetAllOrders);
    }

    const handleFinishOrder = async (id: string) => {
        const text = 'Confirma a entrega do pedido';
        const stats = "Finalizado";

        if (confirm(text) == true) {
            await order.fetchUpdateStatus(id, stats);
            setState(true)
        } else {
            alert('Pedido ainda em produção')
        }
    }

    useEffect(() => {
        handleGetOrder();
        handleLogout();
    }, []);

    useEffect(() => {
        if (state) {
            handleGetOrder();
            setState(false)
        }
    }, [state]);

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

    const sortedData = data.slice().sort((a, b) => new Date(b.update_at) - new Date(a.update_at));

    return (
        <div className="ordersEndList">
            <div className="titleMyOrdersList">Meus pedidos</div>
            {sortedData.map((itens) => (
                itens.status === 'Aberto' ? (
                    <div className="orderCardList" key={itens.id}>
                        <div className="informationOrderList">
                            {itens.products &&
                                itens.products.map((product) => (
                                    <div className="orderInfoList" key={product.id}>
                                        <div className="imageOrderList">
                                            <Image src={product.file_name} width={120} height={120} alt="Imagem do pedido" />
                                        </div>
                                        <div className="descOrderList">
                                            <div className="titleOrderList">{product.title}</div>
                                            <div className="priceOrderList">R$ {product.price}</div>
                                            <div className="statusOrderList">{product.status}</div>
                                            <div className="qtdOrderList">Quantidade: {product.qtd_itens}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="segPartList">
                            <div className="finishOrderList">
                                <div className="finishedOrderList">Concluído em:</div>
                                <div className="dataFinishedOrderList">{updateDate(itens.update_at)}</div>
                            </div>
                            <div className="valueTotalOrderList">
                                <div className="priceValueTotalList">Valor total:</div>
                                <div className="priceValueEndList">R$ {itens.precoTotal}</div>
                            </div>
                            <div className="editOrderList">
                                <div className="editOrderList">
                                    <Image
                                        src={check}
                                        alt="Pedido pronto"
                                        width={28}
                                        height={28}
                                        title="Pedido pronto"
                                        onClick={() => handleFinishOrder(itens.id)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            ))}
        </div>
    );
}