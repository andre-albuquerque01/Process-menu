export const Api = () => {
    const baseUrl = "https://localhost:8080/";

    const fetchUser = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.error(err);

        }
    }
    return{
        fetchUser
    }
}
