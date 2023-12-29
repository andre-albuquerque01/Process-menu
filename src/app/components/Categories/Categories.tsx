import Link from "next/link"
import "./style.css"

export const Categories = () => {
    return (
        <div>
            <section>
                <div className="categoriesList">
                    <ul>
                        <li><Link href="/Product/Search?promocoes">Promoções</Link></li>
                        <li><Link href="/Product/Search?pizza">Pizza</Link></li>
                        <li><Link href="/Product/Search?sobremesas">Sobremesas</Link></li>
                        <li><Link href="/Product/Search?bebidas">Bebidas</Link></li>
                        <li><Link href="/Product/Search?lanches">Lanches</Link></li>
                        <li><Link href="/Product/Search?almocos">Almoço</Link></li>
                        <li><Link href="/Product/Search?jantas">Jantas</Link></li>
                        <li><Link href="/Product/Search?outros">Outros</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
