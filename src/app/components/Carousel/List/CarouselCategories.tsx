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
export const CarouselCategories = () => {
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
                        href="/"
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
                        <SwiperSlide>
                            <Link href="/">
                                <Image
                                    src={pao}
                                    alt='Img 1'
                                />
                                <p>Pão</p>
                                <p>R$ 5</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="drinks">
                <div className="title">
                    <Link
                        href="/"
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
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="lunch">
                <div className="title">
                    <Link
                        href="/"
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
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="dinner">
                <div className="title">
                    <Link
                        href="/"
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
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={pao}
                                alt='Img 1'
                            />
                            <p>Pão</p>
                            <p>R$ 5</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link href="/">
                                <Image
                                    src={pao}
                                    alt='Img 1'
                                />
                                <p>Pão</p>
                                <p>R$ 5</p>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
