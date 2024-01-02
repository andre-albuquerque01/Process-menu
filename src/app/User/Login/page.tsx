'use client';
import Link from "next/link";
import "./style.css";
import Head from "next/head";
import { User } from "@/app/lib/User";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function Login() {
    const [cookies] = useCookies(['token', 'userId', 'user']);
    const log = User();
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleLogout = () => {
        if (cookies.token !== undefined) {
            window.location.href = '/Configuration';
        }
    }

    useEffect(() => {
        handleLogout();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await log.fetchLogin(data);
    }

    return (
        <div className="loginUser">
            <Head>
                <title>Login</title>
            </Head>
            <div className="titleLogin">
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="formLogin">
                    <div className="email">
                        <div className="labelLogin">
                            <label htmlFor="email">Email: <span>*</span></label>
                        </div>
                        <div className="inputEmail">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="password">
                        <div className="labelLogin">
                            <label htmlFor="password">Senha: <span>*</span></label>
                        </div>
                        <div className="inputPassword">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={data.password}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="forgetPass">
                        <span><Link href="/User/Recover">Esqueceu a senha?</Link></span>
                    </div>
                    <div className="btnLogin">
                        <input type="submit" value="Entrar" />
                    </div>
                </div>
            </form>
            <div className="dontAccount">
                <hr />
                <p><Link href="/User/Cad">Não tem conta?</Link></p>
            </div>
        </div>
    )
}