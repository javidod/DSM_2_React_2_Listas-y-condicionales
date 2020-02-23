import React from 'react';
import './App.css';
import Entrada from './Componente/Entrada';
import ValidationComponent from './Componente/ValidationComponent';
import CharComponent from './Componente/CharComponent';


class App extends React.Component {
  state = {
    entrada: "",
    entradaArray: []
  }

  //Funciones

  cambiaInput = (evento) => {
    let valorEntrada = evento.target.value;
    let entradaArrayAux = valorEntrada.split("");
    this.setState({
      entrada: valorEntrada,
      entradaArray: entradaArrayAux
    })
  }

  borrarChar = (charIndex) => {
    const entradaArray = [...this.state.entradaArray];
    entradaArray.splice(charIndex, 1);
    this.setState({
      entradaArray: entradaArray,
      entrada: entradaArray.join('')
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ejercicio React 2: Listas y condicionales</h1>
        <Entrada
          changed={this.cambiaInput}
          nuevotexto={this.state.entrada}
          longitudEntrada={this.state.entrada.length}
        />
        <ValidationComponent
          longitudEntrada={this.state.entrada.length}
        />
        <CharComponent
          CharComponent={this.state.entradaArray}
          clicked={this.borrarChar}
        />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
