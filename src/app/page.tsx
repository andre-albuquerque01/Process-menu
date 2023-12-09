'use-client'
import { Carousel } from "@/app/components/Carousel/Carousel";
import { Categories } from "@/app/components/Categories/Categories";
import { CarouselCategories } from "./components/Carousel/List/CarouselCategories";


export default function Home() {
  return (
    <>
      <Categories />
      <Carousel />
      <CarouselCategories />
    </>
  )
}
