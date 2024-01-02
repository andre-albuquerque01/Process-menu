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
    const [statusOrder, setStatusOrder] = useState<string>('Aberto');
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const [dataOrder, setDataOrder] = useState({
        status: "Finalizado",
        update_at: '',
    });
    const order = Order();

    const handleLogout = () => {
        if (cookies.token === undefined && cookies.user !== 'U') {
            window.location.href = '/User/Login';
            alert('Necessário fazer login');
        }
    }

    const handleGetOrder = async () => {
        const fetchGetAllOrders = await order.fetchGetAllOrders();
        setData(fetchGetAllOrders);
    }

    const handleFinishOrder = async (id: string) => {
        const dateNow = new Date();
        dateNow.setMinutes(dateNow.getMinutes() - dateNow.getTimezoneOffset());
        dateNow.setHours(dateNow.getHours());
        const isoDate = dateNow.toISOString();
        const text = 'Confirma a entrega do pedido';

        if (statusOrder !== 'Finalizado') {
            setDataOrder((prevProduct) => ({
                ...prevProduct,
                update_at: isoDate,
            }))
            if (confirm(text) == true) {
                await order.fetchUpdateStatus(id, dataOrder);
                setState(true)
            } else {
                alert('Pedido ainda em produção')
            }
        }
    }

    const handleStatusAberto = () => {
        setStatusOrder('');
        setStatusOrder('Aberto');
        setState(true)
    }

    const handleStatusClose = (e) => {
        setStatusOrder('');
        setStatusOrder('Finalizado');
        setState(true)
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
    }, [state, statusOrder]);

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
            <div className="choiceStatus">
                <button onClick={handleStatusAberto}>Abertos</button>
                <button onClick={handleStatusClose} className="secondBtn">Finalizados</button>
            </div>
            {sortedData.map((itens) => (
                itens.status === statusOrder ? (
                    <div className="dadOrder" key={itens.id}>
                        <div className="orderCardList" key={itens.id} >
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
                                {statusOrder !== 'Finalizado' && (
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
                                )}
                            </div>
                        </div>
                        <div className="descOrderEnd">
                            {itens.products &&
                                itens.products.map((product) => (
                                    <div className="orderInfoList" key={product.id}>
                                        <div className="descOrderList">
                                            <div className="descOrderList">Descrição: {product.observation}</div>
                                        </div>
                                    </div>
                                ))}
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
                ) : null
            ))
            }
        </div >
    );
}