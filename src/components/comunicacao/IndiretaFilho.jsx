import React from "react";

const IndiretaFilho = (props) => {
    const gerarIdade = () => parseInt(Math.random() * 20) + 50;

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                e => {
                    props.quandoClicar('João', gerarIdade(), true)
                }
            }>Fornecer informações
            </button>
        </div>
    );
};

export default IndiretaFilho;