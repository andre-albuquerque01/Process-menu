"use client";
import Image from "next/image";
import "./style.css";
import bread from "../../../../public/pao.jpg";
import timer from "../../../../public/timer.png";
import { Product } from "@/app/lib/Product";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Search() {
    const product = Product();

    const path = usePathname();

    const [data, setData] = useState();

    const fetcSearch = async () => {
        if (path === '') {
            const fetchData = await product.fetchSearchProduct('Pizza');
            setData(fetchData);
            console.log(`Entrou em title`);
        } else {
            const fetchData = await product.fetchSearchCategory('pizza');
            setData(fetchData);
            console.log(`Entrou em categoria`);
        }
        console.log(data);
    }


    useEffect(() => {
        fetcSearch();
    }, []);

    return (
        <div>
            <div className="searchTitle">
                <p>Pesquisado: {path.toUpperCase()}</p>
            </div>
            <div className="cardProduct">
                {/* {data.map((datas, index) => (
                    <Link href="/Itens">
                    <div className="card">
                        <div className="imageSearch">
                            <Image
                                src={datas.file_name}
                                alt="Image do produto"
                            />
                        </div>
                        <div className="corpCard">
                            <div className="titleCar" title="Título do porudo">
                                <h3>
                                    {datas.title}
                                </h3>
                            </div>
                            <div className="subTitle" title="Subtítulo do produto">
                                {datas.subTitle}
                            </div>
                            <div className="priceCar" title="Preço do produto">
                                {datas.price}
                            </div>
                            <div className="temp" title="Tempo de espera">
                                <Image
                                    src={timer}
                                    width={18}
                                    height={18}
                                    alt="Temporizado" />
                                {datas.waitTime}
                            </div>
                        </div>
                    </div>
                </Link>
                ))} */}
                <Link href="/Itens">
                    <div className="card">
                        <div className="imageSearch">
                            <Image
                                src={bread}
                                alt="Image do produto"
                            />
                        </div>
                        <div className="corpCard">
                            <div className="titleCar" title="Título do porudo">
                                <h3>
                                    Pão
                                </h3>
                            </div>
                            <div className="subTitle" title="Subtítulo do produto">
                                Queijo mina
                            </div>
                            <div className="priceCar" title="Preço do produto">
                                R$ 5
                            </div>
                            <div className="temp" title="Tempo de espera">
                                <Image
                                    src={timer}
                                    width={18}
                                    height={18}
                                    alt="Temporizado" />
                                5 minutos
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}