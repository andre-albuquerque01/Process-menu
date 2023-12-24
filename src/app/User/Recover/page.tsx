"use client";
import { User } from "@/app/lib/User";
import "./style.css";
import Head from "next/head";
import { useState } from "react";

export default function Recover() {
    const recover = User();
    const [data, setData] = useState({
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fetchLogin = await recover.fetchRecover(data)
        console.log(fetchLogin);

    }
    return (
        <div className="recoverUser">
            <Head>
                <title>Recuperar e-mail</title>
            </Head>
            <div className="titleRecover">
                <h2>Recuperar conta</h2>
            </div>
            <div className="descriptionRecover">
                <p>Enviamos um email para o endereço fornecido com as instruções necessárias para recuperar sua senha. Por favor, verifique sua caixa de entrada e também a pasta de spam, caso não encontre o email em sua caixa principal.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="formRecover">
                    <div className="email">
                        <div className="labelRecover">
                            <label htmlFor="email">Email: <span>*</span></label>
                        </div>
                        <div className="inputEmail">
                            <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required />
                        </div>
                    </div>
                    <div className="btnRecover">
                        <input type="submit" value="Enviar" />
                    </div>
                </div>
            </form>
        </div>
    )
}