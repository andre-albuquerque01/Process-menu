'use-client'
import { Carousel } from "@/app/components/Carousel/Carousel";
import { Categories } from  "@/app/components/Categories/Categories";
import { Index } from  "@/app/components/Nav/Index";
import { Footer } from "@/app/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Index />
      <Categories />
      <Carousel />
      <Footer/>
    </>
  )
}
