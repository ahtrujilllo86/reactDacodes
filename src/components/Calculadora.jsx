import { TextField, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import BotonCalculadora from "./BotonCalculadora";

function Calculadora() {
  const styleButton = {
    width: 80,
    height: 80,
    margin: 5,
  };

  const styleButtonTriple = {
    width: 260,
    height: 80,
    margin: 5,
  };

  const styleInput = {
    width: 350,
    height: 60,
    margin: 5,
  };

  const [digito, setDigito] = useState("");
  const [display, setDisplay] = useState("0");
  const [operacion, setOperacion] = useState("");
  const [operando1, setOperando1] = useState(0);
  const [operando2, setOperando2] = useState(0);

  const operadores = ["*", "/", "-", "+", "="];
  const digitosAceptados = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "-",
    "*",
    "+",
    "c",
    "C",
    "Enter",
    "="
  ]

  const operacionCompleta = () => {
    setOperando1(0);
    setOperando2(0);
    // setDigito('');
  };

  const borrado = () => {
    setDigito("");
    setDisplay("0");
    setOperando1(0);
    setOperando2(0);
  };

  const realizarOperacion = (resultado, digit) => {
    console.log(`Resultado -> ${resultado}`);
    setDigito(resultado);
    setDisplay(resultado);
    if (digit !== "=") {
      setDigito("");
      setOperando1(resultado);
      return;
    }
    operacionCompleta();
    return;
  };

  // useEffect(() => {
  //   document.addEventListener("keyup", botonPresionado, false);
  //   console.log(digito)
  // }, [digito]);

  const botonPresionado = (e) => {
    let digit = e.target.value ?? e.key;
    if (!digitosAceptados.includes(digit)) {
      console.log('no aceptado');
      console.log(digit);
      return false;
    }
    if (e.key === "Enter") {
      digit = "=";
    }
    if (e.key === ("c" || "C")) {
      borrado();
      return false;
    }
    if (!operadores.includes(digit)) {
      setDisplay(digito + digit);
      setDigito(digito + digit);
      setOperando2(parseFloat(digito + digit));
      console.log(`Presionaste -> ${digit}`);
    }
    if (operadores.includes(digit)) {
      setOperacion(digit);
      if (digit !== '=') setDisplay(digito + digit);
      // console.log(`metodo -> ${digit}`);
      if (!isNaN(parseFloat(digito + digit)))
        setOperando1(parseFloat(digito + digit));
      // console.log(`ParseFloat -> ${parseFloat(digito + digit)}`);
      // console.log(`Operando1 -> ${operando1}`);
      // console.log(`Operando2 -> ${operando2}`);
      const tipoOperacion = operacion;

      if (digit === "=" || (operando1 && operando2) !== 0) {
        setDigito("");
        if ((operando1 || operando2) === 0 || isNaN(parseFloat(digito + digit)))
          return;
        // console.log(`Tipo Operacion -> ${tipoOperacion}`);
        if (tipoOperacion === "+") {
          const resultado = operando1 + operando2;
          realizarOperacion(resultado, digit);
          return;
        }

        if (tipoOperacion === "-") {
          const resultado = operando1 - operando2;
          realizarOperacion(resultado, digit);
          return;
        }

        if (tipoOperacion === "*") {
          const resultado = operando1 * operando2;
          realizarOperacion(resultado, digit);
          return;
        }

        if (tipoOperacion === "/") {
          const resultado = operando1 / operando2;
          realizarOperacion(resultado, digit);
          return;
        }
        return setDisplay(parseFloat(digito + digit));
      }
      setDigito("");
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={8} md={6}>
          <h1>Calculadora</h1>
        </Grid>
        <Grid item xs={12}>
          <TextField
            style={styleInput}
            id="filled-basic"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            value={display}
          />
          <br />
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"1"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"2"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"3"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"*"}/><br />
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"4"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"5"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"6"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"/"}/><br />
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"7"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"8"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"9"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"-"}/><br />
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"."}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"0"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"00"}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"+"}/><br />
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButtonTriple} numero= {"="}/>
          <BotonCalculadora botonPresionado={botonPresionado} estilo={styleButton} numero= {"C"}/>
        </Grid>
      </Grid>
    </>
  );
}

export default Calculadora;
