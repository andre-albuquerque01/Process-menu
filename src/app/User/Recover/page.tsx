import "./style.css";
import Head from "next/head";

export default function Recover() {
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
            <form>
                <div className="formRecover">
                    <div className="email">
                        <div className="labelRecover">
                            <label htmlFor="email">Email: <span>*</span></label>
                        </div>
                        <div className="inputEmail">
                            <input type="email" name="email" id="email" required />
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