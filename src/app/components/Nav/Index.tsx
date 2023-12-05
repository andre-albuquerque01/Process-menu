import Image from "next/image"
import logoTake from "../../../../public/takethephone.svg"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconArrowDown from "../../../../public/arrowDown.png"
import Link from "next/link"
import "./style.css"

export const Index = () => {
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
                    <ul>
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
                                <li>Login</li>
                                <li>Meus pedidos</li>
                                <li>Configuração</li>
                            </ul>
                        </li>
                        <li>
                            <Image
                                src={iconCar}
                                width={28}
                                height={28}
                                alt="icone do carrinho"
                                title="Carrinho" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
