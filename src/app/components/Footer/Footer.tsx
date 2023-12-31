import Image from "next/image"
import x from "../../../../public/x.png"
import instagram from "../../../../public/instagram.png"
import facebook from "../../../../public/facebook.png"
import youtube from "../../../../public/youtube.png"
import "./style.css"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer>
            <div className="first">
                <div className="help">
                    <h3>Ajuda</h3>
                    <ul>
                        <li><Link href="/Configuration">Configuração</Link></li>
                        <li><Link href="/Orders">Meus pedidos</Link></li>
                        <li><Link href="/Car">Carrinho</Link></li>
                    </ul>
                </div>
                <div className="midiasSocial">
                    <h3>Fique por dentro das novidades</h3>
                    <ul>
                        <li>
                            <Image
                                src={facebook}
                                width={28}
                                height={28}
                                alt="Icone facebook" />
                        </li>
                        <li>
                            <Image
                                src={instagram}
                                width={28}
                                height={28}
                                alt="Icone instagram" />
                        </li>
                        <li>
                            <Image
                                src={youtube}
                                width={28}
                                height={28}
                                alt="Icone Youtube" />
                        </li>
                        <li>
                            <Image
                                src={x}
                                width={28}
                                height={28}
                                alt="Icone X" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copy">
                <p><b>Take the Phone © </b>- Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
