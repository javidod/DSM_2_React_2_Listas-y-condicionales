import React from 'react';

class ValidationComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        var textoSalida = "dsa";
        if (this.props.longitudEntrada <= 4) {
            textoSalida = "Texto demasiado corto";
        }else {
            textoSalida = "Texto suficientemente largo";
        }
        return (
            <div>
                <p>Lontitud del texto: {textoSalida}</p>
                {this.props.children}

            </div >
        )
    }
};

export default ValidationComponent;