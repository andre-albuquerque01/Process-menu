'use client';
import "./style.css";
import Head from "next/head";
import { User } from "@/app/lib/User";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
export default function EditPassword() {
    const [cookies] = useCookies(['token', 'userId']);
    const id = cookies.userId;
    const [data, setData] = useState({
        newPassword: '',
        confirmpassword: '',
        password: ''
    });
    const user = User();

    const handleLogout = () => {
        if (cookies.token === undefined)
            window.location.href = '/User/Login';
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
        if (data.confirmpassword === data.newPassword && data.password !== data.confirmpassword) {
            await user.fetchUsersPass({ id, body: data });
        } else if (data.password === data.newPassword && data.password === data.confirmpassword) {
            alert("As senhas são iguais, não faz necessário mudança")
        }
        else {
            alert("As senhas são diferentes")
        }
    }

    return (
        <div className="altPass">
            <Head>
                <title>Alterar senha</title>
            </Head>
            <div className="titleAltPass">
                <h2>Alterar senha</h2>
            </div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="formAltPass">
                    <div className="password">
                        <div className="labelAltPass">
                            <label htmlFor="password">Senha atual: <span>*</span></label>
                        </div>
                        <div className="inputpassword">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={data.password}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="newpassword">
                        <div className="labelLogin">
                            <label htmlFor="newpassword">Nova senha: <span>*</span></label>
                        </div>
                        <div className="inputNewPassword">
                            <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                value={data.newPassword}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="confirmpassword">
                        <div className="labelLogin">
                            <label htmlFor="confirmpassword">Repita a nova senha: <span>*</span></label>
                        </div>
                        <div className="inputConfirmpassword">
                            <input
                                type="password"
                                name="confirmpassword"
                                id="confirmpassword"
                                value={data.confirmpassword}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="btnLogin">
                        <input type="submit" value="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    )
}