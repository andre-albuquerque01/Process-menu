'use client';
import { Carousel } from "@/app/components/Carousel/Carousel";
import { Categories } from "@/app/components/Categories/Categories";
import { CarouselCategories } from "./components/Carousel/List/CarouselCategories";
import { useEffect, useState } from "react";
import { Product } from "./lib/Product";
type Product = {
  id: string;
  title: string;
  price: number;
  qtd_itens: number;
  file_name: string;
  categorie: string;
  position: string;
}

export default function Home() {
  const product = Product();

  const [data, setData] = useState([]);

  const fetchAll = async () => {
    const fetchData = await product.fetchProduct();
    setData(fetchData);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Categories  />
      <Carousel data={data}/>
      <CarouselCategories data={data}/>
    </>
  )
}
