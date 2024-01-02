'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css"
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: string;
  title: string;
  price: number;
  file_name: string;
  categorie: string;
  position: string;
}

export const Carousel = async (props: Product) => {

  return (
    <div className='carroseul'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {props && props.data.map((carroseul, index) => (( carroseul.position === 'carrossel' && carroseul.status) ?
          <SwiperSlide key={index}>
            <Link href={`/Itens?id=${carroseul.id}`}>
              <Image
                src={carroseul.file_name}
                alt='Imagem do produto'
                width={300}
                height={300}
              />
              <div className="paragraphPrincipal">
                <p>{carroseul.title}</p>
                <p>R$ {carroseul.price}</p>
              </div>
            </Link>
          </SwiperSlide>
          : ''))}
      </Swiper>
    </div>
  )
}
