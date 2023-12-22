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
    const baseUrl = "https://localhost:8080/";
    const token = "";

    // Para mostrar todos os pedidos
    const fetchGetAllOrders = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/order/orders`, {
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
            const requisicao = await fetch(`${baseUrl}/order/${id}`, {
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

     // Para mostrar o pedido pelo numero
    const fetchGetBySearchOrder = async ({ numberOrder }: Order) => {
        try {
            const requisicao = await fetch(`${baseUrl}/order/searchOrder/${numberOrder}`, {
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

    // 
    const fetchCreateOrder = async (body: Order) => {
        try {
            const req = await fetch(`${baseUrl}/order/register`, {
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
            const req = await fetch(`${baseUrl}/order/update/${id}`, {
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
            const req = await fetch(`${baseUrl}/order/updateStatus/${id}`, {
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
            const req = await fetch(`${baseUrl}/order/del/${id}`, {
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
        fetchGetBySearchOrder,
        fetchCreateOrder,
        fetchUpdateOrder,
        fetchUpdateStatus,
        fetchDeleteOrder
    }
}
