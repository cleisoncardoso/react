import React, {useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
    const [nome, setNome] = useState('?');
    const [numero, setNumero] = useState(0);
    const [bool, setBool] = useState(false);

    function fornecerInformacoes(nomeParam, numeroParam, boolParam) {
        setNome(nomeParam);
        setNumero(numeroParam);
        setBool(boolParam);

        console.log(nome, numero, bool)
    }

    return (
        <div>
            <div>Pai</div>
            <div>
                <span><strong>{nome}</strong></span>
                <span>{numero}</span>
                <span>{bool}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    );
};

export default IndiretaPai;