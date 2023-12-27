'use client';
import Link from "next/link"
import "./style.css"
import Head from "next/head"
import { User } from "@/app/lib/User";
import { useState } from "react";

type User = {
    body: object
}

export default function CadUser() {
    const user = User();

    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        cpf: '',
        birthday: '',
        firstName: "",
        lastName: "",
        phoneNumber: "",
        ddd: "",
        addressUser: {
            cep: "",
            logradouro: "",
            bairro: "",
            uf: "",
            complemento: ""
        },
        termsService: isChecked
    });

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData((prevUser) => {
            if (name.startsWith("addressUser.")) {
                const addressFieldName = name.replace("addressUser.", "");
                return {
                    ...prevUser,
                    addressUser: {
                        ...prevUser.addressUser,
                        [addressFieldName]: value,
                    },
                };
            } else {
                return {
                    ...prevUser,
                    [name]: value,
                };
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (data.password === data.confirmpassword && isChecked)
            await user.fetchRegister(data);
    }

    return (
        <div className="userCad">
            <Head>
                <title>Cadastro do perfil</title>
            </Head>
            <div className="titleCad">
                <h2>Cadastro de perfil</h2>
            </div>
            <form onSubmit={handleSubmit} method="POST">
                <div className="formUser">
                    <div className="step1">
                        <div className="firstName">
                            <div className="labelUser">
                                <label htmlFor="firstName">Nome: <span>*</span></label>
                            </div>
                            <div className="inputFirst">
                                <input type="text" name="firstName" id="firstName" onChange={handleChange} value={data.firstName} required />
                            </div>
                        </div>
                        <div className="lastName">
                            <div className="labelUser">
                                <label htmlFor="lastName">Sobrenome: <span>*</span></label>
                            </div>
                            <div className="inputLast">
                                <input type="text" name="lastName" id="lastName" onChange={handleChange} value={data.lastName} required />
                            </div>
                        </div>
                        <div className="cpf">
                            <div className="labelUser">
                                <label htmlFor="cpf">CPF: <span>*</span></label>
                            </div>
                            <div className="inputCpf">
                                <input type="text" name="cpf" id="cpf" onChange={handleChange} value={data.cpf} required />
                            </div>
                        </div>
                        <div className="birthday">
                            <div className="labelUser">
                                <label htmlFor="birthday">Data de nascimento: <span>*</span></label>
                            </div>
                            <div className="inputBirthday">
                                <input type="date" name="birthday" id="birthday" onChange={handleChange} value={data.birthday} required />
                            </div>
                        </div>
                        <div className="email">
                            <div className="labelUser">
                                <label htmlFor="email">Email: <span>*</span></label>
                            </div>
                            <div className="inputEmail">
                                <input type="email" name="email" id="email" onChange={handleChange} value={data.email} required />
                            </div>
                        </div>
                        <div className="password">
                            <div className="labelUser">
                                <label htmlFor="password">Senha: <span>*</span></label>
                            </div>
                            <div className="inputpassword">
                                <input type="password" name="password" id="password" onChange={handleChange} value={data.password} required />
                            </div>
                        </div>
                        <div className="Confirmpassword">
                            <div className="labelUser">
                                <label htmlFor="confirmpassword">Confirmação da senha: <span>*</span></label>
                            </div>
                            <div className="inputConfirmpassword">
                                <input type="password" name="confirmpassword" id="confirmpassword" onChange={handleChange} value={data.confirmpassword} required />
                            </div>
                        </div>
                    </div>
                    <div className="step2">
                        <div className="ddd">
                            <div className="labelUser">
                                <label htmlFor="ddd">DDD: <span>*</span></label>
                            </div>
                            <div className="inputddd">
                                <input type="number" name="ddd" id="ddd" onChange={handleChange} value={data.ddd} required />
                            </div>
                        </div>
                        <div className="phoneNumber">
                            <div className="labelUser">
                                <label htmlFor="phoneNumber">Número do celular: <span>*</span></label>
                            </div>
                            <div className="inputPhoneNumber">
                                <input type="number" name="phoneNumber" id="phoneNumber" onChange={handleChange} value={data.phoneNumber} required />
                            </div>
                        </div>
                        <div className="cep">
                            <div className="labelUser">
                                <label htmlFor="addressUser.cep">CEP: <span>*</span></label>
                            </div>
                            <div className="inputCep">
                                <input type="number" name="addressUser.cep" id="addressUser.cep" onChange={handleChange} value={data.addressUser.cep} required />
                            </div>
                        </div>
                        <div className="endereco">
                            <div className="labelUser">
                                <label htmlFor="endereco">Endereço: <span>*</span></label>
                            </div>
                            <div className="inputEndereco">
                                <input type="text" name="addressUser.logradouro" id="endereco" onChange={handleChange} value={data.addressUser.logradouro} required />
                            </div>
                        </div>
                        <div className="bairro">
                            <div className="labelUser">
                                <label htmlFor="bairro">Bairro: <span>*</span></label>
                            </div>
                            <div className="inputBairro">
                                <input type="text" name="addressUser.bairro" id="bairro" onChange={handleChange} value={data.addressUser.bairro} required />
                            </div>
                        </div>
                        <div className="uf">
                            <div className="labelUser">
                                <label htmlFor="uf">Estado: <span>*</span></label>
                            </div>
                            <div className="inputUf">
                                <select id="uf" name="addressUser.uf" onChange={handleChange} value={data.addressUser.uf} required>
                                    <option defaultValue={0}>Selecione o estado</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                    <option value="EX">Estrangeiro</option>
                                </select>
                            </div>
                        </div>
                        <div className="complemento">
                            <div className="labelUser">
                                <label htmlFor="complemento">Complemento:</label>
                            </div>
                            <div className="inputComplemento">
                                <input type="text" name="addressUser.complemento" id="complemento" onChange={handleChange} value={data.addressUser.complemento} required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="termAceite">
                    <input type="checkbox" name="termsService" id="termsService" onChange={handleOnChange} checked={isChecked} value={data.termsService} required /><Link href="/">Termo de Adesão</Link>
                </div>
                <div className="btnUser">
                    <input type="submit" value="Salvar" />
                </div>
            </form>
        </div>
    )
}
