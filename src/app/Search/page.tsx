import Image from "next/image";
import "./style.css";
import bread from "../../../public/pao.jpg";

export default function Search() {
    return (
        <div>
            <div className="searchTitle">
            <p>Pesquisado: Pão</p>
            </div>
            <div className="cardProduct">
                <div className="card">
                    <div className="imageSearch">
                        <Image
                            src={bread}
                            alt="Image do produto"
                        />
                    </div>
                    <div className="corpCard">
                        <div className="titleCar">
                            <h2>
                                Pão
                            </h2>
                        </div>
                        <div className="priceCar">
                            R$ 5
                        </div>
                        <div className="temp">
                            5 minutos
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imageSearch">
                        <Image
                            src={bread}
                            alt="Image do produto"
                        />
                    </div>
                    <div className="corpCard">
                        <div className="titleCar">
                            <h2>
                                Pão
                            </h2>
                        </div>
                        <div className="priceCar">
                            R$ 5
                        </div>
                        <div className="temp">
                            5 minutos
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imageSearch">
                        <Image
                            src={bread}
                            alt="Image do produto"
                        />
                    </div>
                    <div className="corpCard">
                        <div className="titleCar">
                            <h2>
                                Pão
                            </h2>
                        </div>
                        <div className="priceCar">
                            R$ 5
                        </div>
                        <div className="temp">
                            5 minutos
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imageSearch">
                        <Image
                            src={bread}
                            alt="Image do produto"
                        />
                    </div>
                    <div className="corpCard">
                        <div className="titleCar">
                            <h2>
                                Pão
                            </h2>
                        </div>
                        <div className="priceCar">
                            R$ 5
                        </div>
                        <div className="temp">
                            5 minutos
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="imageSearch">
                        <Image
                            src={bread}
                            alt="Image do produto"
                        />
                    </div>
                    <div className="corpCard">
                        <div className="titleCar">
                            <h2>
                                Pão
                            </h2>
                        </div>
                        <div className="priceCar">
                            R$ 5
                        </div>
                        <div className="temp">
                            5 minutos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}