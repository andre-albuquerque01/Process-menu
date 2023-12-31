'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import pao from '../../../../../public/pao.jpg'
import arrowRight from '../../../../../public/arrowRight.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Product } from '@/app/lib/Product';

type Product = {
    id: string;
    title: string;
    price: number;
    qtd_itens: number;
    file_name: string;
    categorie: string;
    position: string;
}

export const CarouselCategories = (props: Product) => {
    const [qtdCarousel, setQtdCarousel] = useState<number>(5);

    useEffect(() => {
        function handleResize() {
            const { innerWidth: width } = window;
            if (width <= 468) {
                setQtdCarousel(2);
            } else if (width < 620) {
                setQtdCarousel(3);
            }
            else if (width < 890) {
                setQtdCarousel(4);
            }
            else if (width < 920) {
                setQtdCarousel(5);
            } else if (width < 1100) {
                setQtdCarousel(6);
            }
            else if (width < 1330) {
                setQtdCarousel(7);
            } else {
                setQtdCarousel(8);
            }
        }
        handleResize();

    }, []);
    return (
        <div className='CarouselCategories'>
            <div className="snack">
                <div className="title">
                    <Link
                        href={`/Product/Search?category=lanches`}
                    >
                        Lanches
                        <Image
                            src={arrowRight}
                            alt='icone de seta a direita'
                        />
                    </Link>
                </div>
                <div className="carousel">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={qtdCarousel}
                    >
                        {props && props.data.map((carroseul, index) => ((carroseul.categorie === "lanches" && carroseul.position === 'entrada') ?
                            <SwiperSlide key={index}>
                                <Link href={`/Itens?id=${carroseul.id}`}>
                                    <Image
                                        src={carroseul.file_name}
                                        alt='Img 1'
                                        width={25}
                                        height={25}
                                    />
                                    <div className="paragraph">
                                        <p>{carroseul.title}</p>
                                        <p>R$ {carroseul.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            : ''))}
                    </Swiper>
                </div>
            </div>
            <div className="drinks">
                <div className="title">
                    <Link
                        href={`/Product/Search?category=bebidas`}
                    >
                        Bebidas
                        <Image
                            src={arrowRight}
                            alt='icone de seta a direita'
                        />
                    </Link>
                </div>
                <div className="carousel">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={qtdCarousel}
                    >
                        {props && props.data.map((carroseul, index) => ((carroseul.categorie === "bebidas" && carroseul.position === 'entrada') ?
                            <SwiperSlide key={index}>
                                <Link href={`/Itens?id=${carroseul.id}`}>
                                    <Image
                                        src={carroseul.file_name}
                                        alt='Img 1'
                                        width={25}
                                        height={25}
                                    />
                                    <div className="paragraph">
                                        <p>{carroseul.title}</p>
                                        <p>R$ {carroseul.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            : ''))}
                    </Swiper>
                </div>
            </div>
            <div className="lunch">
                <div className="title">
                    <Link
                        href={`/Product/Search?category=almocos`}
                    >
                        Almoço
                        <Image
                            src={arrowRight}
                            alt='icone de seta a direita'
                        />
                    </Link>
                </div>
                <div className="carousel">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={qtdCarousel}
                    >
                        {props && props.data.map((carroseul, index) => ((carroseul.categorie === "almocos" && carroseul.position === 'entrada') ?
                            <SwiperSlide key={index}>
                                <Link href={`/Itens?id=${carroseul.id}`}>
                                    <Image
                                        src={carroseul.file_name}
                                        alt='Img 1'
                                        width={25}
                                        height={25}
                                    />
                                    <div className="paragraph">
                                        <p>{carroseul.title}</p>
                                        <p>R$ {carroseul.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            : ''))}
                    </Swiper>
                </div>
            </div>
            <div className="dinner">
                <div className="title">
                    <Link
                        href={`/Product/Search?category=jantas`}
                    >
                        Jantar
                        <Image
                            src={arrowRight}
                            alt='icone de seta a direita'
                        />
                    </Link>
                </div>
                <div className="carousel">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={qtdCarousel}
                    >
                        {props && props.data.map((carroseul, index) => ((carroseul.categorie === "jantas" && carroseul.position === 'entrada') ?
                            <SwiperSlide key={index}>
                                <Link href={`/Itens?id=${carroseul.id}`}>
                                    <Image
                                        src={carroseul.file_name}
                                        alt='Img 1'
                                        width={25}
                                        height={25}
                                    />
                                    <div className="paragraph">
                                        <p>{carroseul.title}</p>
                                        <p>R$ {carroseul.price}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                            : ''))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
