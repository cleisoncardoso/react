import React from "react";

const Botoes = (props) => {
    return (
        <div>
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
        </div>
    );
};

export default Botoes