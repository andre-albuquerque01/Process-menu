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
    const [cookies, setCookie] = useCookies(['token', 'userId']);

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
                    // expires: new Date(Date.now() + 3600),
                    // secure: true,
                    // path: "/"
                });
                setCookie('userId', data.id, {
                    // expires: new Date(Date.now() + 3600),
                    // secure: true,
                    // path: "/"
                });
                window.location.href = "/Car";
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
            } else {
                console.log("Error");
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
                window.location.href = "/User/Login"
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);

        }
    }

    const fetchUsers = async ({ body }: User) => {
        console.log(body);

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
            } else {
                console.log("Error");
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
            } else {
                console.log("Error");
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
