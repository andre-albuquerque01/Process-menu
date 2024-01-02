import { useCookies } from 'react-cookie';

type User = {
    id: string;
    email: string;
    password: string;
    confirmpassword: string;
    cpf: string;
    birthday: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    ddd: string;
    addressUser: {
        cep: string;
        logradouro: string;
        bairro: string;
        uf: string;
        complemento: string;
    };
    termsService: string;
    body: object;
};


export const User = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'userId', 'user']);

    const baseUrl = "http://localhost:8080/auth";
    const token = cookies.token;
    const user = cookies.userId;

    const fetchGetOneUser = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/users/${user}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const data = await requisicao.json();
            return data;
        } catch (err) {
            console.error(err);
        }
    }

    const fetchLogin = async (body: object) => {
        try {
            const req = await fetch(`${baseUrl}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                const data = await req.json();
                setCookie('token', data.token, {
                    path: '/',
                    expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
                    secure: true,
                });
                setCookie('userId', data.id, {
                    path: '/',
                    expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
                    secure: true,
                });
                setCookie('user', data.role, {
                    path: '/',
                    expires: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
                    secure: true,
                });
                window.location.href = "/Configuration";
            } else {
                window.alert("E-mail ou senha inválido");
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchRegister = async (body: object) => {
        try {
            const req = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                console.log("Sucess");
                alert("Cadastrado com sucesso!")
                window.location.href = "/User/Login";
            } else {
                console.log("Error");
                alert('E-mail inválido ou senhas diferentes');
            }
        } catch (error) {
            console.log("Error");

        }
    }

    const fetchRecover = async (email: User) => {
        try {
            const req = await fetch(`${baseUrl}/recover`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(email),
            });
            if (req.ok) {
                console.log("Sucess");
                alert("E-mail enviado para seu endereço de e-mail");
                window.location.href = "/User/Login";
            } else {
                alert('E-mail inválido');
            }
        } catch (error) {
            console.error(error);

        }
    }

    const fetchUsers = async ({ body }: User) => {
        try {
            const req = await fetch(`${baseUrl}/updateUser/${user}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                console.log("Sucess");
                window.location.href = "/Configuration";
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            } else {
                console.log("Error");
                alert('E-mail já usado ou senha invalida')
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchUsersPass = async ({ id, body }: User) => {
        try {
            const req = await fetch(`${baseUrl}/usersPass/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                console.log("Sucess");
                alert("Senha alterada com sucesso")
                window.location.href = "/Configuration";
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            } else {
                console.log("Error");
                alert("Senhas invalidas")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        fetchGetOneUser,
        fetchLogin,
        fetchRegister,
        fetchRecover,
        fetchUsers,
        fetchUsersPass
    }
}
