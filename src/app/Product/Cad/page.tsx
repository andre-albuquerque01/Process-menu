import "./style.css"

export default function CadProduct() {
    return (
        <div className="product">
            <div className="titleproduct">
                <h2>Produto</h2>
            </div>
            <form encType="multipart/form-data">
                <div className="formProduct">
                    <div className="productTitle">
                        <div className="labelTitle">
                            <label htmlFor="title">Título: <span>*</span></label>
                        </div>
                        <div className="inputTitle">
                            <input type="text" name="title" id="title" placeholder="Pão" required />
                        </div>
                    </div>
                    <div className="productDescription">
                        <div className="labelTitle">
                            <label htmlFor="description">Descrição: <span>*</span></label>
                        </div>
                        <div className="inputDescription">
                            <textarea name="description" id="description" placeholder="Modo de preparo"></textarea>
                        </div>
                    </div>
                    <div className="productQtd">
                        <div className="labelTitle">
                            <label htmlFor="Qtd">Quantidade de itens: <span>*</span></label>
                        </div>
                        <div className="inputQtd">
                            <input type="number" name="Qtd" id="Qtd" min="0" placeholder="Quantos itens têm disponível" required />
                        </div>
                    </div>
                    <div className="productObservation">
                        <div className="labelTitle">
                            <label htmlFor="observation">Observação: <span>*</span></label>
                        </div>
                        <div className="inputObservation">
                            <textarea name="observation" id="observation" placeholder="Contêm glúten"></textarea>
                        </div>
                    </div>
                    <div className="productPrice">
                        <div className="labelTitle">
                            <label htmlFor="Price">Preço: <span>*</span></label>
                        </div>
                        <div className="inputPrice">
                            <input type="number" name="Price" id="Price" step="0.1" placeholder="5.5" min="0" required />
                        </div>
                    </div>
                    <div className="productTime">
                        <div className="labelTitle">
                            <label htmlFor="Time">Tempo de espera: <span>*</span></label>
                        </div>
                        <div className="inputTime">
                            <input type="text" name="Time" id="Time" min="0" placeholder="5 minutos" required />
                        </div>
                    </div>
                    <div className="productCategorie">
                        <div className="labelTitle">
                            <label htmlFor="Categorie">Categoria: <span>*</span></label>
                        </div>
                        <div className="inputCategorie">
                            <select id="categorie" name="categorie" required>
                                <option value="promocao">Promoções</option>
                                <option value="pizza">Pizza</option>
                                <option value="sobremesas">Sobremesas</option>
                                <option value="bebidas">Bebidas</option>
                                <option value="lanches">Lanches</option>
                                <option value="jantas">Jantas</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>
                    </div>
                    <div className="productPosition">
                        <div className="labelTitle">
                            <label htmlFor="Position">Posição: <span>*</span></label>
                        </div>
                        <div className="inputPosition">
                            <select id="Position" name="Position" required>
                                <option value="carrossel">Carrossel</option>
                                <option value="entrada">Entrada</option>
                                <option value="pesquisa">Pesquisa</option>
                            </select>
                        </div>
                    </div>
                    <div className="productFile">
                        <div className="labelTitle">
                            <label htmlFor="File">Imagem: <span>*</span></label>
                        </div>
                        <div className="inputFile">
                            <input type="file" name="File" id="File" required />
                        </div>
                    </div>
                    <div className="btnProduct">
                        <input type="submit" value="Salvar" />
                    </div>
                </div>
            </form>
        </div>
    );
}