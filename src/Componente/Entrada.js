import React from 'react';

class Entrada extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.props.changed} value={this.props.nuevotexto} />
                <p>Lontitud del texto: {this.props.longitudEntrada}</p>
                {this.props.children}
            </div >
        )
    }
};

export default Entrada;