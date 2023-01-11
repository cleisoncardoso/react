import React from "react";

export default function ComParametro (props) {
    const situacao = props.idade > 17 ? "Apto para CNH" : "Não apto para CNH"

    return (
        <div>
            <p>
                <strong>Nome:</strong> {props.nome}
            </p>
            <p>
                <strong>CPF:</strong> {props.cpf}
            </p>
            <p>
                <strong>Email:</strong> {props.email}
            </p>
            <p>
                <strong>Situação:</strong> {situacao}
            </p>
        </div>
    );
}