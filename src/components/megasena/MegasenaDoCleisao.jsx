import React, {useState} from "react";

export default function MegasenaDoCleisao() {
    const [qtdNumbers, setQtdNumbers] = useState(6);
    const [numbers, setNumbers] = useState(Array(qtdNumbers).fill("?"));

    const generateNumbersMegaSena = () => {
        setNumbers(generateRamdomNumbers(60, 1, qtdNumbers));
    }

    const changeQtdNumbers = (e) => {
        setQtdNumbers(parseInt(e.target.value))
        setNumbers(generateRamdomNumbers(60, 1, parseInt(e.target.value)))
    }

    const generateRamdomNumbers = (max, min, qtd) => {
        const randomNumbers = new Set();

        while (randomNumbers.size < qtd) {
            randomNumbers.add(
                parseInt(Math.random() * (max - min) + min)
            );
        }

        return [...randomNumbers].sort((n1, n2) => n1 - n2);
    }

    return (
        <>
            <label htmlFor="qtdInput">Números a gerar: </label>
            <input id="qtdInput" type="number" min={6} defaultValue={6} max={15} onChange={changeQtdNumbers}/>
            <button onClick={() => generateNumbersMegaSena()}>Gerar surpresinha</button>
            <div>{numbers.join(" ")}</div>
        </>
    );
}
