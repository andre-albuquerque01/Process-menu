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
    const [search, setSearch] = useState<string>('');
    const [active, setActive] = useState<boolean>(false);
    const toggleCloseMenuIcon = () => setActive(!active);
    const toggleMenu = () => setActive(!active);

    const handleChange = (e) => {
        if (e.key === "Enter") {
            setSearch(e.target.value);
            window.location.href = `/Product/Search?search=${search}`;
        }
        setSearch(e.target.value);
    };

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
                    <Link href='/'>
                        <Image
                            src={logoTake}
                            className="imageTakeThePhone"
                            alt="Logo marca da empresa" />
                    </Link>
                </div>
                <div className="search">
                    <input type="text" name="search" id="search" onKeyDown={handleChange} onChange={handleChange} />
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
