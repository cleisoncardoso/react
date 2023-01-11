import React from "react";
import produtos from "../data/produtos";
import "./TabelaProdutos.css";

const tabelaProdutos = (props) => {
    const produtosLista = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {
                    produto.preco
                        .toFixed(2)
                        .replace('.', ',')}
                </td>
            </tr>
        );
    });

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                </tr>
                </thead>
                <tbody>
                {produtosLista}
                </tbody>
            </table>
        </div>
    );
};

export default tabelaProdutos;
