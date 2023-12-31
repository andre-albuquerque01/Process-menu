"use client";
import pao from '../../../public/pao.jpg'
import trash from '../../../public/trash.png'
import Image from "next/image";
import "./style.css";
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useCarContext } from '../context/CarContext';
import { useCookies } from 'react-cookie';


export default function Car() {
    const [cookies, setCookie] = useCookies(['token', 'userId']);
    const [cardCredOpen, setCardCredOpen] = useState<boolean>(false);
    const [cardDebOpen, setCardDebOpen] = useState<boolean>(false);
    const { car, setCar } = useCarContext();
    const [valueTotal, setValueTotal] = useState<number>(0);
    const [qtd, setQtd] = useState<number>(0);
    const [data, setData] = useState({
        products: car,
        idUser: cookies.userId,
        formPay: '',
        qtdItens: qtd,
        table: "",
        precoTotal: valueTotal,
        status: "Aberto",
        impostoTributos: "",
        nfe: '',
        dateOrder: '',
        tip: '',
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
        await product.fetchRegisterProduct(data);
    }

    const calcularTotal = () => {
        let valorTotal: number = 0;
        let qtd: number = 0;

        car.forEach(car => {
            valorTotal += parseFloat(car.price.toString()) * (car.qtd_itens);
            qtd += car.qtd_itens;
        });

        setValueTotal(valorTotal);
        setQtd(qtd);
    }

    useEffect(() => {
        calcularTotal();
    }, [])

    const handleRemoveItem = (id: string) => {
        const newCar = car.filter(car => car.id !== id);
        setCar(newCar);
    }

    const handleCarCred = () => {
        setCardCredOpen(!cardCredOpen);
        setCardDebOpen(false);
    }
    const handleCarDeb = () => {
        setCardDebOpen(!cardDebOpen);
        setCardCredOpen(false);
    }
    const handlePix = () => {
        setCardDebOpen(false);
        setCardCredOpen(false);
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
                    <form>
                        <div className="totalPay">
                            Total: R$ {valueTotal}
                        </div>
                        <div className="qtdItensPay">
                            Quantidade de itens: {qtd}
                        </div>
                        <div className="tablePay">
                            Mesa: <input type="number" name='table' value={data.table} onChange={handleChange} min="0" required />
                        </div>
                        <div className="gorjeta">
                            Extras: <input type="number" name='tip' value={data.tip} onChange={handleChange} step="0.1" min="0" required />
                        </div>
                        <div className="formPay">
                            <div className="titlePay">
                                Forma de pagamento:
                            </div>
                            <div className="metodos">
                                <div className="pix">
                                    <input type="radio" name="formPay" id="pix" value={data.formPay} onChange={handleChange} required /><label htmlFor="pix" onClick={handlePix}> Pix</label>
                                </div>
                                {/* <div className="cardCred">
                                <input type="radio" name="payMethod" id="cartaoCredito" value="cartaoCredito" /><label htmlFor="cartaoCredito" onClick={handleCarCred}> Cartão de Crédito</label>
                            </div>
                            <div className="cardDeb">
                                <input type="radio" name="payMethod" id="cartaoDebito" value="cartaoDebito" /><label htmlFor="cartaoDebito" onClick={handleCarDeb} > Cartão de Débito</label>
                            </div> */}
                            </div>
                        </div>

                        {cardCredOpen ?
                            <div className="card">
                                <div className="titleCard">
                                    Cartão de crédito
                                </div>
                                <div className="nameCard">
                                    <div className="lableName">
                                        <label htmlFor="name">Nome que está no cartão<span>*</span></label>
                                    </div>
                                    <div className="inputName">
                                        <input type="text" name="" id="name" required />
                                    </div>
                                </div>
                                <div className="numberCard">
                                    <div className="lableNumber">
                                        <label htmlFor="number">Numero do cartão<span>*</span></label>
                                    </div>
                                    <div className="inputNumber">
                                        <input type="text" name="" id="number" required />
                                    </div>
                                </div>
                                <div className="dateCard">
                                    <div className="lableDate">
                                        <label htmlFor="date">Data de vencimento<span>*</span></label>
                                    </div>
                                    <div className="inputDate">
                                        <input type="date" name="" id="date" max="2050-12-31" required />
                                    </div>
                                </div>
                                <div className="cvcCard">
                                    <div className="lableCVC">
                                        <label htmlFor="cvc">CVC<span>*</span></label>
                                    </div>
                                    <div className="inputCVC">
                                        <input type="number" name="" id="cvc" required />
                                    </div>
                                </div>
                            </div>
                            :
                            ''}
                        {cardDebOpen ?
                            <div className="card">
                                <div className="titleCard">
                                    Cartão de Débito
                                </div>
                                <div className="nameCard">
                                    <div className="lableName">
                                        <label htmlFor="name">Nome que está no cartão<span>*</span></label>
                                    </div>
                                    <div className="inputName">
                                        <input type="text" name="" id="name" required />
                                    </div>
                                </div>
                                <div className="numberCard">
                                    <div className="lableNumber">
                                        <label htmlFor="number">Numero do cartão<span>*</span></label>
                                    </div>
                                    <div className="inputNumber">
                                        <input type="text" name="" id="number" required />
                                    </div>
                                </div>
                                <div className="dateCard">
                                    <div className="lableDate">
                                        <label htmlFor="date">Data de vencimento<span>*</span></label>
                                    </div>
                                    <div className="inputDate">
                                        <input type="date" name="" id="date" max="2050-12-31" required />
                                    </div>
                                </div>
                                <div className="cvcCard">
                                    <div className="lableCVC">
                                        <label htmlFor="cvc">CVC<span>*</span></label>
                                    </div>
                                    <div className="inputCVC">
                                        <input type="number" name="" id="cvc" required />
                                    </div>
                                </div>
                            </div>
                            :
                            ''}
                        <div className="payBtn">
                            <button type='submit'>Finalizar</button>
                        </div>
                    </form>
                </div>
            </div >

        </div >
    )
}
