"use client";
import trash from '../../../public/trash.png'
import Image from "next/image";
import "./style.css";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useCarContext } from '../context/CarContext';
import { useCookies } from 'react-cookie';
import { Order } from '../lib/Order';


export default function Car() {
    const [cookies] = useCookies(['token', 'userId']);
    const { car, setCar } = useCarContext();
    const [valueTotal, setValueTotal] = useState<number>(0);
    const [qtd, setQtd] = useState<number>(0);
    const [waitTime, setWaitTime] = useState<number>(0);
    const order = Order();
    const [data, setData] = useState({
        products: car,
        idUser: cookies.userId,
        formPay: '',
        qtdItens: 0,
        table: "",
        precoTotal: 0,
        status: "Aberto",
        impostoTributos: "",
        nfe: '',
        tip: '',
        create_at: '',
        update_at: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await order.fetchCreateOrder(data);
        setCar([]);
    }
    
    useEffect(() => {
        const dateNow = new Date();
        dateNow.setMinutes(dateNow.getMinutes() - dateNow.getTimezoneOffset());
        dateNow.setHours(dateNow.getHours());
        const isoDate = dateNow.toISOString();

        let valorTotal: number = 0;
        let qtd: number = 0;
        let waitTimer: number = 0;
        let contWaitTime: number = 0;

        car.forEach(car => {
            valorTotal += parseFloat(car.price.toString()) * (car.qtd_itens);
            qtd += car.qtd_itens;
            waitTimer += Number(car.waitTime);
        });

        contWaitTime = (waitTime * qtd) / 1.5;
        setValueTotal(valorTotal);
        setQtd(qtd);
        setWaitTime(contWaitTime);

        setData((prevProduct) => ({
            ...prevProduct,
            qtdItens: qtd,
            precoTotal: valorTotal,
            create_at: isoDate,
            update_at: isoDate,
        }))
    }, [car])

    const handleRemoveItem = (id: string) => {
        const newCar = car.filter(car => car.id !== id);
        setCar(newCar);
    }

    return (
        <div className='dadCar'>
            <Head>
                <title>Carrinho</title>
            </Head>
            <div className="FirsTitle">
                <h2>Carrinho</h2>
            </div>
            <div className="itensCar">
                <div className="agrupItem">
                    {car.map((itens, index) => (
                        <div className="item" key={index}>
                            <div className="imageCarItem">
                                <Image
                                    src={itens.file_name}
                                    alt={`Imagem do ${itens.title}`}
                                    width={120}
                                    height={120}
                                />
                            </div>
                            <div className="textItem">
                                <div className="titleItemCar">{itens.title}</div>
                                <div className="priceCar">
                                    R$ <span className='valuePrice'>{itens.price}</span>
                                </div>
                                <div className="qtd">Quantidade: {itens.qtd_itens}</div>
                                <div className="obs">Observação: <span>{itens.observation}</span></div>
                            </div>
                            <div className="trashItem">
                                <button onClick={() => handleRemoveItem(itens.id)}>
                                    <Image
                                        src={trash}
                                        alt='icone lixeira'
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pay">
                    <form onSubmit={handleSubmit}>
                        <div className="totalPay">
                            Total: R$ {valueTotal}
                        </div>
                        <div className="qtdItensPay">
                            Quantidade de itens: {qtd}
                        </div>
                        <div className="qtdItensPay">
                            Tempo de espera: {waitTime}
                        </div>
                        <div className="tablePay">
                            Mesa: <input type="number" name='table' value={data.table} onChange={handleChange} min="0" required />
                        </div>
                        <div className="gorjeta">
                            Extras: R$<input type="number" name='tip' value={data.tip} onChange={handleChange} step="0.1" min="0" required />
                        </div>
                        <div className="formPay">
                            <div className="titlePay">
                                Forma de pagamento:
                            </div>
                            <div className="metodos">
                                <div className="pix">
                                    <input type="radio" name="formPay" id="pix" value={data.formPay} onChange={handleChange} required /><label htmlFor="pix"> Pix</label>
                                </div>
                            </div>
                        </div>
                        <div className="payBtn">
                            {qtd < 0 ?
                                <button type='submit' disabled>Finalizar</button>
                                : <button type='submit'>Finalizar</button>}
                        </div>
                    </form>
                </div>
            </div >

        </div >
    )
}
