"use client";
import pao from '../../../public/pao.jpg'
import trash from '../../../public/trash.png'
import Image from "next/image";
import "./style.css";
import { useState } from 'react';

export default function Car() {
    const [cardCredOpen, setCardCredOpen] = useState<boolean>(false);
    const [cardDebOpen, setCardDebOpen] = useState<boolean>(false);
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
        <div>
            <div className="FirsTitle">
                <h2>Carrinho</h2>
            </div>
            <div className="itens">
                <div className="agrupItem">
                    <div className="item">
                        <div className="imageItem">
                            <Image
                                src={pao}
                                alt='Img 1'
                            /></div>
                        <div className="textItem">
                            <div className="title">
                                Pão
                            </div>
                            <div className="price">
                                R$ <span className='valuePrice'>5</span>
                            </div>
                            <div className="qtd">
                                Quantidade: 2
                            </div>
                        </div>
                        <div className="trashItem">
                            <button>
                                <Image
                                    src={trash}
                                    alt='icone lixeira'
                                />
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imageItem">
                            <Image
                                src={pao}
                                alt='Img 1'
                            /></div>
                        <div className="textItem">
                            <div className="title">
                                Pão
                            </div>
                            <div className="price">
                                R$ <span className='valuePrice'>5</span>
                            </div>
                            <div className="qtd">
                                Quantidade: 2
                            </div>
                        </div>
                        <div className="trashItem">
                            <button>
                                <Image
                                    src={trash}
                                    alt='icone lixeira'
                                />
                            </button>
                        </div>
                    </div>
                    <div className="item">
                        <div className="imageItem">
                            <Image
                                src={pao}
                                alt='Img 1'
                            /></div>
                        <div className="textItem">
                            <div className="title">
                                Pão
                            </div>
                            <div className="price">
                                R$ <span className='valuePrice'>5</span>
                            </div>
                            <div className="qtd">
                                Quantidade: 2
                            </div>
                        </div>
                        <div className="trashItem">
                            <button>
                                <Image
                                    src={trash}
                                    alt='icone lixeira'
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pay">
                    <div className="totalPay">
                        Total: R$ 25
                    </div>
                    <div className="tablePay">
                        Mesa: <input type="number" min="0" />
                    </div>
                    <div className="gorjeta">
                        Extras: <input type="number" step="0.1" min="0" />
                    </div>
                    <div className="formPay">
                        <div className="titlePay">
                            Forma de pagamento:
                        </div>
                        <div className="metodos">
                            <div className="pix">
                                <input type="radio" name="payMethod" id="pix" value="pix" /><label htmlFor="pix" onClick={handlePix}> Pix</label>
                            </div>
                            <div className="cardCred">
                                <input type="radio" name="payMethod" id="cartaoCredito" value="cartaoCredito" /><label htmlFor="cartaoCredito" onClick={handleCarCred}> Cartão de Crédito</label>
                            </div>
                            <div className="cardDeb">
                                <input type="radio" name="payMethod" id="cartaoDebito" value="cartaoDebito" /><label htmlFor="cartaoDebito" onClick={handleCarDeb} > Cartão de Débito</label>
                            </div>
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
                        <button>Finalizar</button>
                    </div>
                </div>
            </div >

        </div >
    )
}
