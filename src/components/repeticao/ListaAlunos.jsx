import React from "react";
import alunos from '../data/alunos'

const ListaAlunos = (props) => {
    const alunosList = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        );
    });

    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {alunosList}
            </ul>
        </div>
    );
};

export default ListaAlunos;