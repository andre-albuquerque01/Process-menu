import Image from "next/image"
import x from "../../../../public/x.png"
import instagram from "../../../../public/instagram.png"
import facebook from "../../../../public/facebook.png"
import youtube from "../../../../public/youtube.png"
import "./style.css"

export const Footer = () => {
    return (
        <footer>
            <div className="first">
                <div className="help">
                    <h3>Ajuda</h3>
                    <ul>
                        <li>Minha conta</li>
                        <li>Meus pedidos</li>
                        <li>Outros</li>
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
                <p><b>Take the Phone © </b>- Todos os direitos reservados. O conteúdo deste site, incluindo texto, imagens, gráficos e outros materiais, é protegido por direitos autorais e outras leis de propriedade intelectual. A reprodução, distribuição ou uso não autorizado de qualquer material deste site sem a permissão prévia por escrito do Take the Phone é estritamente proibida.</p>
            </div>
        </footer>
    )
}
