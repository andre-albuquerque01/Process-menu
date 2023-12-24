type Product = {
    id: string,
    body: object,
    name: string,
    category: string,
}

export const Product = () => {
    const baseUrl = "http://localhost:8080/product";
    const token = "";

    // Para mostrar todos os produtos
    const fetchProduct = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/product`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.error(err);

        }
    }

    // Para mostrar o produto de acordo com o nome
    const fetchSearchProduct = async (name: Product) => {
        try {
            const requisicao = await fetch(`${baseUrl}/searchProduct/${name}`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.error(err);

        }
    }

    // Para mostrar os produtos de acordo com a categoria
    const fetchSearchCategory = async (category: Product) => {
        try {
            const requisicao = await fetch(`${baseUrl}/searchCategory/${category}`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.error(err);

        }
    }


    // Para registra o produto separado e depois a imagem, passa primeiro o fetchRegisterImage
    const fetchRegisterProduct = async (body: Product) => {
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

    // Para registrar imagem, para passar junto com o fetchRegisterProduct
    const fetchRegisterImage = async (body: Product) => {
        try {
            // Cadastro da imagem
            const req = await fetch(`${baseUrl}/register/image`, {
                method: "POST",
                headers: {
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

    // Para alterar o produto
    const fetchAlt = async ({ id, body }: Product) => {
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

    // Passar junto com fetchAlt, para alterar a imagem
    const fetchAltImage = async ({ id, body }: Product) => {
        try {
            const req = await fetch(`${baseUrl}/update/image/${id}`, {
                method: "PUT",
                headers: {
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

    // Para deletar o produto
    const fetchDelete = async (id: Product) => {
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

    // Para dar like
    const fetchLike = async ({ id, body }: Product) => {
        try {
            const req = await fetch(`${baseUrl}/like/${id}`, {
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

    // Para diminuir a quantidade de itens no produto
    const fetchProductQtd = async ({ id, body }: Product) => {
        try {
            const req = await fetch(`${baseUrl}/update/qtd/${id}`, {
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
        fetchProduct,
        fetchSearchProduct,
        fetchSearchCategory,
        fetchRegisterProduct,
        fetchRegisterImage,
        fetchAltImage,
        fetchAlt,
        fetchDelete,
        fetchLike,
        fetchProductQtd
    }
}
