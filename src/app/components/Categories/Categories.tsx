import Link from "next/link"
import "./style.css"

export const Categories = () => {
    return (
        <div>
            <section>
                <div className="categoriesList">
                    <ul>
                        <li><Link href="/Product/Search?category=promocoes">Promoções</Link></li>
                        <li><Link href="/Product/Search?category=pizza">Pizza</Link></li>
                        <li><Link href="/Product/Search?category=sobremesas">Sobremesas</Link></li>
                        <li><Link href="/Product/Search?category=bebidas">Bebidas</Link></li>
                        <li><Link href="/Product/Search?category=lanches">Lanches</Link></li>
                        <li><Link href="/Product/Search?category=almocos">Almoço</Link></li>
                        <li><Link href="/Product/Search?category=jantas">Jantas</Link></li>
                        <li><Link href="/Product/Search?category=outros">Outros</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
