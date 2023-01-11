import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" numero={20} bool={true}></DiretaFilho>
            <DiretaFilho texto="Filho 2" numero={15} bool={false}></DiretaFilho>
        </div>
    );
};

export default DiretaPai;