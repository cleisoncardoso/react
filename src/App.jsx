import React from 'react';

import './App.css';
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParam from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import MegasenaDoCleisao from "./components/megasena/MegasenaDoCleisao"

const app = () => {
    return (
        <div className="App">
            <h1>Fundamentos react</h1>
            <div className="Cards">
                <Card titulo="#13 - Desafio megasena (Do CLEISÃO)" color="#B9006E">
                    <MegasenaDoCleisao/>
                </Card>

                <Card titulo="#12 - Contador (classe)" color="#424242">
                    <Contador/>
                </Card>

                <Card titulo="#11 - Componente controlado" color="#E45F56">
                    <Input/>
                </Card>

                <Card titulo="#10 - Comunicação indireta" color="#59323C">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#9 - Comunicação direta" color="#59323C">
                    <DiretaPai/>
                </Card>

                <Card titulo="#8 - Renderização condicional" color="#982395">
                    <ParOuImpar numero={25}/>
                    <UsuarioInfo usuario={{nome: "Cleison Cardoso"}}/>
                </Card>

                <Card titulo="#7 - Desafio lista" color="#3A9AD9">
                    <TabelaProdutos/>
                </Card>

                <Card titulo="#6 - Lista" color="#FF4C65">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#5 - Componente com filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Tiago"/>
                        <FamiliaMembro nome="João"/>
                    </Familia>
                </Card>

                <Card titulo="#4 - Desafio aleatório" color="#E8B71A">
                    <Aleatorio min={1} max={60}/>
                </Card>

                <Card titulo="#3 - Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>

                <Card titulo="#2 - Elemento com parâmetro" color="#FA6900">
                    <ComParam
                        nome="Cleison"
                        cpf="10571526926"
                        email="cleisonxcardoso@gmail.com"
                        idade={25}
                    />
                </Card>

                <Card titulo="#1 - Primeiro elemento" color="#588C73">
                    <Primeiro/>
                </Card>
            </div>
        </div>
    );
};

export default app;