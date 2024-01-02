"use client";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import list from "../../../public/list.png"
import edit from "../../../public/edit.png"
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

export default function Configuration() {
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const [isClient, setIsClient] = useState(false);


    const handleLogout = () => {
        if (cookies.token === undefined)
            window.location.href = '/User/Login';
    }

    useEffect(() => {
        setIsClient(true);
        handleLogout();
    }, []);

    return (
        <div className="centerConfig">
            <div className="titleConfig">
                Configuração
            </div>
            <div className="configPerfil styledDiv">
                <Image
                    src={edit}
                    width={28}
                    height={28}
                    alt="Icone de editar"
                />
                <Link href='/User/Edit'>
                    Editar usuário
                </Link>
            </div>
            <div className="configPass styledDiv">
                <Image
                    src={edit}
                    width={28}
                    height={28}
                    alt="Icone de editar"
                />
                <Link href='/User/EditPassword'>
                    Alterar senha
                </Link>
            </div>
            {isClient && cookies.user !== 'U' ? (
                <><div className="configProduct styledDiv">
                    <Image
                        src={list}
                        width={28}
                        height={28}
                        alt="Icone de lista" />
                    <Link href='/Product/List'>
                        Listar produto
                    </Link>
                </div><div className="configOrder styledDiv">
                        <Image
                            src={list}
                            width={28}
                            height={28}
                            alt="Icone de lista" />
                        <Link href='/Orders/List'>
                            Listar pedidos
                        </Link>
                    </div></>
            ) : ''}
        </div>
    );
}