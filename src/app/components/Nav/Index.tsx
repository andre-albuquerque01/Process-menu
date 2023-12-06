'use client'
import Image from "next/image"
import logoTake from "../../../../public/takethephone.svg"
import menu from "../../../../public/menu.png"

import Link from "next/link"
import "./style.css"
import { useState } from "react"
import { List } from "./List"

export const Index = () => {
    const { active, setActive } = useState<boolean>(false);
    const toggleMenu = () => {
        setActive(!active);
    }
    return (
        <div className="header">
            <nav>
                <div className="image">
                    <Link href="/">
                        <Image
                            src={logoTake}
                            className="imageTakeThePhone"
                            alt="Logo marca da empresa" />
                    </Link>
                </div>
                <div className="search">
                    <input type="text" name="search" id="search" />
                </div>
                <div className="list">

                    <div className={active ? "hamburgueActive" : "hamburgueInactive"}>
                    </div>
                    <List />
                </div>
            </nav>
        </div>
    )
}
