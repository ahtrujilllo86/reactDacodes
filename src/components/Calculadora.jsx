import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useState } from 'react';

function Calculadora() {

  const [digito, setDigito] = useState('');
  const [display, setDisplay] = useState('0');
  const [operacion, setOperacion] = useState('');
  const [operando1, setOperando1] = useState(0);
  const [operando2, setOperando2] = useState(0);




  const stylePadre = {
    width: 380,
    height: 300,
  }

  const styleButton = {
    width: 80,
    height: 80,
    margin: 5
  }

  const styleButtonTriple = {
    width: 260,
    height: 80,
    margin: 5
  }
  const styleInput = {
    width: 350,
    height: 60,
    margin: 5,
  }

  const operadores = ["*", "/", "-", "+", '='];

  const operacionCompleta = () => {
    setOperando1(0);
    setOperando2(0);
    // setDigito('');
  }

  const borrado = () => {
    setDigito('');
    setDisplay('0');
    setOperando1(0);
    setOperando2(0);
  }

  const realizarOperacion = (resultado, digit) => {
    console.log(`Resultado -> ${resultado}`);
    setDigito(resultado);
    setDisplay(resultado);
    if (digit !== "=") {
      setDigito('');
      setOperando1(resultado);
      return
    }
    operacionCompleta();
    return
  }

  const botonPresionado = e => {
    const digit = e.target.value;
    if (!operadores.includes(digit)) {
      setDisplay(digito + digit)
      setDigito(digito + digit);
      setOperando2(parseFloat(digito + digit));
      console.log(`Presionaste -> ${digit}`);
    }
    if (operadores.includes(digit)) {
      setOperacion(digit);
      console.log(`metodo -> ${digit}`);
      if (!isNaN(parseFloat(digito + digit))) setOperando1(parseFloat(digito + digit));
      console.log(`ParseFloat -> ${parseFloat(digito + digit)}`);
      console.log(`Operando1 -> ${operando1}`);
      console.log(`Operando2 -> ${operando2}`);
      const tipoOperacion = operacion;

      if (digit === "=" || (operando1 && operando2) !== 0) {
        setDigito('');
        if ((operando1 || operando2) === 0 || isNaN(parseFloat(digito + digit))) return;
        console.log(`Tipo Operacion -> ${tipoOperacion}`);
        if (tipoOperacion === "+") {
          const resultado = operando1 + operando2;
          realizarOperacion(resultado, digit);
          return
        }

        if (tipoOperacion === "-") {
          const resultado = operando1 - operando2;
          realizarOperacion(resultado, digit);
          return
        }

        if (tipoOperacion === "*") {
          const resultado = operando1 * operando2;
          realizarOperacion(resultado, digit);
          return
        }

        if (tipoOperacion === "/") {
          const resultado = operando1 / operando2;
          realizarOperacion(resultado, digit);
          return
        }
        return setDisplay(parseFloat(digito + digit));
      }
      setDigito('');
    }
  }

  return (
    <>
      <div style={stylePadre}>
        <h1 style={{ textAlign: 'center' }}>Calculadora</h1>
        <TextField
          style={styleInput}
          id="filled-basic"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          value={display} /><br />
        <Button style={styleButton} variant="contained" value="1" onClick={botonPresionado}>1</Button>
        <Button style={styleButton} variant="contained" value="2" onClick={botonPresionado}>2</Button>
        <Button style={styleButton} variant="contained" value="3" onClick={botonPresionado}>3</Button>
        <Button style={styleButton} variant="contained" value="*" onClick={botonPresionado}>*</Button>
        <br />
        <Button style={styleButton} variant="contained" value="4" onClick={botonPresionado}>4</Button>
        <Button style={styleButton} variant="contained" value="5" onClick={botonPresionado}>5</Button>
        <Button style={styleButton} variant="contained" value="6" onClick={botonPresionado}>6</Button>
        <Button style={styleButton} variant="contained" value="/" onClick={botonPresionado}>/</Button>
        <br />
        <Button style={styleButton} variant="contained" value="7" onClick={botonPresionado}>7</Button>
        <Button style={styleButton} variant="contained" value="8" onClick={botonPresionado}>8</Button>
        <Button style={styleButton} variant="contained" value="9" onClick={botonPresionado}>9</Button>
        <Button style={styleButton} variant="contained" value="-" onClick={botonPresionado}>-</Button>
        <br />
        <Button style={styleButton} variant="contained" value="." onClick={botonPresionado}>.</Button>
        <Button style={styleButton} variant="contained" value="0" onClick={botonPresionado}>0</Button>
        <Button style={styleButton} variant="contained" value="00" onClick={botonPresionado}>00</Button>
        <Button style={styleButton} variant="contained" value="+" onClick={botonPresionado}>+</Button>
        <br />
        <Button style={styleButtonTriple} variant="contained" value="=" onClick={botonPresionado}>=</Button>
        <Button style={styleButton} variant="contained" value="clear" onClick={borrado}>c</Button>
      </div>
    </>
  )
}

export default Calculadora