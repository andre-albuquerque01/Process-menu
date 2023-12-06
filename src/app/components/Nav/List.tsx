import Image from 'next/image'
import React from 'react'
import iconUser from "../../../../public/userPerson.png"
import iconCar from "../../../../public/carrinho.png"
import iconArrowDown from "../../../../public/arrowDown.png"

export const List = () => {
    return (
        <div>
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
    )
}
