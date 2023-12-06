import Link from "next/link"
import "./style.css"

export const Categories = () => {
    return (
        <div>
            <section>
                <div className="categoriesList">
                    <ul>
                        <li><Link href="/">Promoções</Link></li>
                        <li><Link href="/">Pizza</Link></li>
                        <li><Link href="/">Sobremesas</Link></li>
                        <li><Link href="/">Bebidas</Link></li>
                        <li><Link href="/">Lanches</Link></li>
                        <li><Link href="/">Jantas</Link></li>
                        <li><Link href="/">Outros</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
