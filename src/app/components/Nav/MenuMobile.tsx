import Image from "next/image"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconOrder from "../../../../public/order.png"
import iconSettings from "../../../../public/settings.png"
import logoTake from "../../../../public/takethephone.svg"
import search from "../../../../public/search.png"
import Link from "next/link"
import "./style.css"
import { Categories } from "../Categories/Categories"

export const MenuMobile = () => {
    return (
        <div className="menuMobile">
            <h1>Menu</h1>
            <ul>
                <li>
                    <input type="text" name="search" id="search" placeholder="Pesquisar produto"/>
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
                    <Link href="/">Login</Link>
                </li>
                <li>
                    <Image
                        src={iconOrder}
                        width={30}
                        height={30}
                        alt="icone de pedido" />
                    <Link href="/">Meus pedidos</Link>
                </li>
                <li>
                    <Image
                        src={iconSettings}
                        width={30}
                        height={30}
                        alt="icone de configuração" />
                    <Link href="/">Configuração</Link>
                </li>
                <li>
                    <Image
                        src={iconCar}
                        width={28}
                        height={28}
                        alt="icone do carrinho"
                        title="Carrinho" />
                    <Link href="/">Carrinho</Link>
                </li>
            </ul>
            <div className="logoMenu">
                <Image
                    src={logoTake}
                    width={60}
                    height={60}
                    alt="Logomarca"
                />
            </div>
            <div className="categoria">
                <Categories />
            </div>
        </div>
    )
}
