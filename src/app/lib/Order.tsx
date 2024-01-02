import { useCookies } from "react-cookie";

type Order = {
    id: string,
    body: object,
    numberOrder: string,
    products: [],
    idUser: string,
    formPay: string,
    qtdItens: string,
    table: string,
    precoTotal: number,
    stats: string,
    impostoTributos: number,
    nfe: string,
    dateOrder: string,
    tip: number

}

export const Order = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['token', 'userId', 'user']);
    const baseUrl = "http://localhost:8080/order";
    const token = cookies.token;
    const user = cookies.userId;
    let redirectToLogin = false;
    if (typeof window !== 'undefined') {
        redirectToLogin = cookies.token === undefined;
    }

    if (redirectToLogin) {
        window.location.href = '/User/Login';
    }

    // Para mostrar todos os pedidos
    const fetchGetAllOrders = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/orders`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (requisicao.ok) {
                const reqJson = await requisicao.json();
                return reqJson;
            } else if (requisicao.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (err) {
            console.error(err);
        }
    }

    // Para mostrar o pedido pelo id
    const fetchGetOrderById = async ({ id }: Order) => {
        try {
            const requisicao = await fetch(`${baseUrl}/${id}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (requisicao.ok) {
                const reqJson = await requisicao.json();
                return reqJson;
            } else if (requisicao.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (err) {
            console.error(err);
        }
    }

    // Para mostrar o pedido pelo usuário
    const fetchGetByUserOrders = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/userId/${user}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (requisicao.ok) {
                const reqJson = await requisicao.json();
                return reqJson;
            } else if (requisicao.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (err) {
            console.error(err);
        }
    }

    const fetchGetBySearchOrder = async ({ numberOrder }: Order) => {
        try {
            const requisicao = await fetch(`${baseUrl}/searchOrder/${numberOrder}`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (requisicao.ok) {
                const reqJson = await requisicao.json();
                return reqJson;
            } else if (requisicao.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (err) {
            console.error(err);
        }
    }

    const fetchCreateOrder = async (body: Order) => {
        try {
            const req = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                alert('Pedido realizado com sucesso');
                window.location.href = "/Car/Confirmation";
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchUpdateOrder = async ({ id, body }: Order) => {
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
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchUpdateStatus = async (id: string, body: object) => {
        try {
            const req = await fetch(`${baseUrl}/updateStatus/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(body),
            });
            if (req.ok) {
                console.log("Sucess");
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchDeleteOrder = async (id: Order) => {
        try {
            const req = await fetch(`${baseUrl}/del/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (req.ok) {
                console.log("Sucess");
            } else if (req.status === 403) {
                removeCookie('token');
                removeCookie('userId');
                removeCookie('user');
                alert('Faça o login novamente.')
                window.location.href = '/User/Login';
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        fetchGetAllOrders,
        fetchGetOrderById,
        fetchGetByUserOrders,
        fetchGetBySearchOrder,
        fetchCreateOrder,
        fetchUpdateOrder,
        fetchUpdateStatus,
        fetchDeleteOrder
    }
}
