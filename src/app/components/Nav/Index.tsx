import Image from "next/image"
import logoTake from "../../../../public/takethephone.svg"
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconArrowDown from "../../../../public/arrowDown.png"
// import iconSearch from "../../../../public/search.png"
import Link from "next/link"
import "./style.css"

export const Index = () => {
    return (
        <div>
            <nav>
                <div className="image">
                    <Link href="/">
                        <Image
                            src={logoTake}
                            width={160}
                            height={80}
                            alt="Logo marca da empresa" />
                    </Link>
                </div>
                <div className="search">
                    <input type="text" name="search" id="search" />
                    {/* <Image
                        src={iconSearch}
                        width={28}
                        height={28}
                        alt="icone de user" /> */}
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <Image
                                src={iconUser}
                                width={28}
                                height={28}
                                alt="icone de user" />
                            Perfil
                            <Image
                                src={iconArrowDown}
                                width={28}
                                height={28}
                                alt="icone da setinha" />

                            <ul className="insideList">
                                <li>Login</li>
                                <li>Meus pedidos</li>
                            </ul>
                        </li>
                        <li>
                            <Image
                                src={iconCar}
                                width={28}
                                height={28}
                                alt="icone do carrinho" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
