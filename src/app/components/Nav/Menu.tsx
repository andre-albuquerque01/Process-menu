import Image from "next/image"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconArrowDown from "../../../../public/arrowDown.png"
import Link from "next/link"
import "./style.css"

export const Menu = () => {
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
                        <li><Link href="/Login">Login</Link></li>
                        <li><Link href="/">Meus pedidos</Link></li>
                        <li><Link href="/Cad/User">Configuração</Link></li>
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
