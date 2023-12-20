import Link from "next/link";
import "./style.css";

export default function Login() {
    return (
        <div className="loginUser">
            <div className="titleLogin">
                <h2>Login</h2>
            </div>
            <form>
                <div className="formLogin">
                    <div className="email">
                        <div className="labelLogin">
                            <label htmlFor="email">Email: <span>*</span></label>
                        </div>
                        <div className="inputEmail">
                            <input type="email" name="email" id="email" required />
                        </div>
                    </div>
                    <div className="password">
                        <div className="labelLogin">
                            <label htmlFor="password">Senha: <span>*</span></label>
                        </div>
                        <div className="inputPassword">
                            <input type="password" name="password" id="password" required />
                        </div>
                    </div>
                    <div className="forgetPass">
                        <span><Link href="/">Esqueceu a senha?</Link></span>
                    </div>
                    <div className="btnLogin">
                        <input type="submit" value="Entrar" />
                    </div>
                </div>
            </form>
            <div className="dontAccount">
                <hr />
                <p><Link href="/User">Não tem conta?</Link></p>
            </div>
        </div>
    )
}