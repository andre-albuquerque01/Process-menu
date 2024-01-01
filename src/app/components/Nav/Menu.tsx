"use client";
import Image from "next/image"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconArrowDown from "../../../../public/arrowDown.png"
import Link from "next/link"
import "./style.css"
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export const Menu = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['token', 'userId', 'user']);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogout = () => {
        removeCookie('token');
        removeCookie('userId');
        removeCookie('user');
        window.location.href = '/';
    }

    return (
        <div className="menu">
            <ul className="menu">
                <li>
                    <Image
                        src={iconUser}
                        width={30}
                        height={30}
                        alt="icone de user" />
                    <span>
                        Perfil
                    </span>
                    <Image
                        src={iconArrowDown}
                        width={30}
                        height={30}
                        alt="icone da setinha"
                        title="Perfil" />

                    <ul className="insideList">
                        <li><Link href="/">Inicio</Link></li>
                        {isClient && cookies.token === undefined ? (
                            <li><Link href="/User/Login">Login</Link></li>
                        ) :
                            <>
                                <li className="logoutHandle" onClick={handleLogout}>
                                    <Link href="">Sair</Link>
                                </li>
                                <li>
                                    <Link href="/Orders">Meus pedidos</Link>
                                </li>
                                <li>
                                    <Link href="/Configuration">Configuração</Link>
                                </li>
                            </>
                        }
                    </ul>
                </li>
                <li>
                    <Link href="/Car">
                        <Image
                            src={iconCar}
                            width={28}
                            height={28}
                            alt="icone do carrinho"
                            title="Carrinho" />
                    </Link>
                </li>
            </ul>
        </div >
    )
}
