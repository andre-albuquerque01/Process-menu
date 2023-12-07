'use client'
import Image from "next/image"
import logoTake from "../../../../public/takethephone.svg"
import iconMenu from "../../../../public/menu.png"
import iconClose from "../../../../public/closeX.png"
import Link from "next/link"
import "./style.css"
import { useEffect, useState } from "react"
import { Menu } from "./Menu"
import { MenuMobile } from "./MenuMobile"

export const Index = () => {
    const [active, setActive] = useState<boolean>(false);
    const toggleCloseMenuIcon = () => setActive(!active);
    const toggleMenu = () => setActive(!active);

    useEffect(() => {
        function handleResize() {
          if (window.innerWidth > 468 && active) {
            setActive(false);
          }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, [active]);
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
                    <div className="menuHamburgue">
                        {active === false ?
                            <Image
                                src={iconMenu}
                                width={28}
                                height={28}
                                alt="icone menu"
                                onClick={toggleMenu}
                            />
                            :
                            <Image
                                src={iconClose}
                                className="closeMenu"
                                width={28}
                                height={28}
                                alt="icone menu"
                                onClick={toggleCloseMenuIcon}
                            />}
                    </div>
                    {active ? <MenuMobile /> : <Menu />}
                </div>
            </nav>
        </div>
    )
}
