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
    status: string,
    impostoTributos: number,
    nfe: string,
    dateOrder: string,
    tip: number

}

export const Order = () => {
    const [cookies] = useCookies(['token', 'userId']);
    const baseUrl = "http://localhost:8080/order";
    const token = cookies.token;
    const user = cookies.userId;

    // Para mostrar todos os pedidos
    const fetchGetAllOrders = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/orders`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const reqJson = await requisicao.json();
            return reqJson;
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
            const reqJson = await requisicao.json();
            return reqJson;
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
            const reqJson = await requisicao.json();
            return reqJson;
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
            const reqJson = await requisicao.json();
            return reqJson;
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
                console.log("Sucess");
            } else {
                console.log("Error");
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
            } else {
                console.log("Error");
            }
        } catch (error) {
            console.error(error);

        }
    }

    const fetchUpdateStatus = async ({ id, status }: Order) => {
        try {
            const req = await fetch(`${baseUrl}/updateStatus/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: status,
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
            } else {
                console.log("Error");
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
