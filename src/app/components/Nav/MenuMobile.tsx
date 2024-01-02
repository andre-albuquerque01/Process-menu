'use client';
import Image from "next/image"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconOrder from "../../../../public/order.png"
import iconSettings from "../../../../public/settings.png"
import logoTake from "../../../../public/takethephone.svg"
import searchIcon from "../../../../public/search.png"
import cardapio from "../../../../public/cardapio.png"
import home from "../../../../public/home.png"
import logout from "../../../../public/logout.png"
import Link from "next/link"
import "./style.css"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

export const MenuMobile = () => {
    const [isSubMenuVisible, setSubMenuVisibility] = useState<boolean>(false);
    const [cookies, setCookies, removeCookie] = useCookies(['token', 'userId', 'user']);
    const [isClient, setIsClient] = useState(false);
    const [search, setSearch] = useState<string>('');

    const handleLogout = () => {
        removeCookie('token');
        removeCookie('userId');
        removeCookie('user');
        window.location.href = '/';
    }
    const handleChange = (e) => {
        if (e.key === "Enter") {
            setSearch(e.target.value);
            window.location.href = `/Product/Search?search=${search}`;
        }
        setSearch(e.target.value);
    };

    const toggleSubMenu = () => {
        setSubMenuVisibility(!isSubMenuVisible);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="menuMobile">
            <div className="menuStart">
                <h1>Menu</h1>
            </div>
            <ul className="firstUla">
                <li>
                    <input type="text" name="search" id="search" placeholder="Pesquisar produto" onKeyDown={handleChange} onChange={handleChange} />
                    <button>
                        <Image
                            src={searchIcon}
                            width={23}
                            height={23}
                            alt="icone de busca" />
                    </button>
                </li>
                <li>
                    <Image
                        src={home}
                        width={30}
                        height={30}
                        alt="icone de inicio" />
                    <Link href="/">Inicio</Link>
                </li>
                {isClient && cookies.token === undefined ? (
                    <li>
                        <Image
                            src={iconUser}
                            width={30}
                            height={30}
                            alt="icone de user" />
                        <Link href="/User/Login">Login</Link>
                    </li>
                ) : (
                    <li onClick={handleLogout} className="logout">
                        <Image
                            src={logout}
                            width={30}
                            height={30}
                            alt="Icone logout"
                            title="Logout" />
                        <Link href="">
                            Sair
                        </Link>
                    </li>
                )}
                <li>
                    <Image
                        src={iconOrder}
                        width={30}
                        height={30}
                        alt="icone de pedido" />
                    <Link href="/Orders">Meus pedidos</Link>
                </li>
                <li>
                    <Image
                        src={iconCar}
                        width={28}
                        height={28}
                        alt="icone do carrinho"
                        title="Carrinho" />
                    <Link href="/Car">Carrinho</Link>
                </li>
                <li>
                    <Image
                        src={iconSettings}
                        width={30}
                        height={30}
                        alt="icone de configuração" />
                    <Link href="/Configuration">Configuração</Link>
                </li>
                <li onClick={toggleSubMenu} className="">
                    <Image
                        src={cardapio}
                        width={28}
                        height={28}
                        alt="icone do carrinho"
                        title="Carrinho" />
                    <p>Categorias</p>
                    {/* <Image
                        src={iconArrowDown}
                        width={30}
                        height={30}
                        alt="icone da setinha"
                        title=""
                        onClick={toggleSubMenu}
                    /> */}
                </li>
            </ul>
            <ul className="categoriaMenu"
            // className={`menuCategories ${isSubMenuVisible ? 'active' : ''}`}
            >
                <li><Link href="/Product/Search?category=promocoes">Promoções</Link></li>
                <li><Link href="/Product/Search?category=pizza">Pizza</Link></li>
                <li><Link href="/Product/Search?category=sobremesas">Sobremesas</Link></li>
                <li><Link href="/Product/Search?category=bebidas">Bebidas</Link></li>
                <li><Link href="/Product/Search?category=lanches">Lanches</Link></li>
                <li><Link href="/Product/Search?category=almocos">Almoço</Link></li>
                <li><Link href="/Product/Search?category=jantas">Jantas</Link></li>
                <li><Link href="/Product/Search?category=outros">Outros</Link></li>
            </ul>
            <div className="logoMenu">
                <Image
                    src={logoTake}
                    width={60}
                    height={60}
                    alt="Logomarca"
                />
            </div>

        </div>
    )
}
