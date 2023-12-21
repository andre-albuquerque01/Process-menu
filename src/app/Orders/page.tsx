import Image from "next/image";
import "./style.css";
import pao from "../../../public/pao.jpg";

export default function BackOrder() {
    return (
        <div className="ordersEnd">
            <div className="orderCard">
                <div className="informationOrder">
                    <div className="orderInfo">
                        <div className="imageOrder">
                            <Image
                                src={pao}
                                alt="Imagem do pedido"
                            />
                        </div>
                        <div className="descOrder">
                            <div className="titleOrder">Pao</div>
                            <div className="priceOrder">R$ 5</div>
                            <div className="statusOrder">Entregue</div>
                        </div>
                    </div>
                    <div className="orderInfo">
                        <div className="imageOrder">
                            <Image
                                src={pao}
                                alt="Imagem do pedido"
                            />
                        </div>
                        <div className="descOrder">
                            <div className="titleOrder">Pao</div>
                            <div className="priceOrder">R$ 5</div>
                            <div className="statusOrder">Finalizado</div>
                        </div>
                    </div>
                </div>
                <div className="segPart">
                    <div className="finishOrder">
                        <div className="finishedOrder">
                            Concluído em:
                        </div>
                        <div className="dataFinishedOrder">
                            28/01/2024
                        </div>
                    </div>
                    <div className="valueTotalOrder">
                        <div className="priceValueTotal">
                            Valor total:
                        </div>
                        <div className="priceValueEnd">
                            R$ 45
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}