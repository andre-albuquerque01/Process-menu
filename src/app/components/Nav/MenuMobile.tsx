import Image from "next/image"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconOrder from "../../../../public/order.png"
import iconSettings from "../../../../public/settings.png"
import logoTake from "../../../../public/takethephone.svg"
import search from "../../../../public/search.png"
import cardapio from "../../../../public/cardapio.png"
import iconArrowDown from "../../../../public/arrowDown.png"
import logout from "../../../../public/logout.png"
import Link from "next/link"
import "./style.css"
import { useState } from "react"

export const MenuMobile = () => {
    const [isSubMenuVisible, setSubMenuVisibility] = useState<boolean>(false);

    const toggleSubMenu = () => {
        setSubMenuVisibility(!isSubMenuVisible);
    };
    return (
        <div className="menuMobile">
            <div className="menuStart">
                <h1>Menu</h1>
                <Image
                    src={logout}
                    width={28}
                    height={28}
                    alt="Icone logout"
                    title="Logout" />
            </div>
            <ul className="test">
                <li>
                    <input type="text" name="search" id="search" placeholder="Pesquisar produto" />
                    <button>
                        <Image
                            src={search}
                            width={26}
                            height={26}
                            alt="icone de busca" />
                    </button>
                </li>
                <li>
                    <Image
                        src={iconUser}
                        width={30}
                        height={30}
                        alt="icone de user" />
                    <Link href="/User/Login">Login</Link>
                </li>
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
                        src={iconSettings}
                        width={30}
                        height={30}
                        alt="icone de configuração" />
                    <Link href="/Configuration">Configuração</Link>
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
                <li onClick={toggleSubMenu}>
                    <Image
                        src={cardapio}
                        width={28}
                        height={28}
                        alt="icone do carrinho"
                        title="Carrinho" />
                    <p>Cardapio</p>
                    <Image
                        src={iconArrowDown}
                        width={30}
                        height={30}
                        alt="icone da setinha"
                        title="Perfil"
                        onClick={toggleSubMenu}
                    />
                </li>
                <ul
                    className={`menuCategories ${isSubMenuVisible ? 'active' : ''}`}
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
