'use client'
import pao from '../../../../public/pao.jpg'
import Image from "next/image"
import { Index } from "../Nav/Index"

export const Car = () => {
    return (
        <div>
            <Index />
            <div className="littleCar">
                <div className="image">
                    <Image
                        src={pao}
                        alt='imagem do item'
                    />
                </div>
            </div>
        </div>
    )
}
