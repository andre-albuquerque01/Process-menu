type User = {
    id: string,
    body: {
        email: string,
        password: string
    },
    email: string,
}

export const User = () => {
    const baseUrl = "http://localhost:8080/auth";
    const token = "";

    const fetchGetOneUser = async (id: User) => {
        try {
            const requisicao = await fetch(`${baseUrl}/users/${id}`, {
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
                console.log("Sucess");
                const data = await req.json();
                console.log(data);
                return data;
            } else {
                console.log("Error");
                
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchRegister = async (body: User) => {
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
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);

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
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);

        }
    }

    const fetchUsers = async ({ id, body }: User) => {
        try {
            const req = await fetch(`${baseUrl}/update/${id}`, {
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
