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
  const [teclado, setTeclado] = useState("");

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
    "=",
  ];

  const operacionCompleta = () => {
    setOperando1(0);
    setOperando2(0);
    // setDigito('');
  };

  const borrado = () => {
    setDigito("");
    setOperando1(0);
    setOperando2(0);
    setDisplay("0");
    resultado = '';
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
  // }, []);
  let resultado = "";
  let operador1 = 0;
  let operador2 = 0;
  let resultadoParcial = 0;
  let tipoOperacion = "";

  useEffect(() => {
    document.addEventListener("keyup", (event) => {
      concatenar(event.key);
      console.log("event key", event.key);
    });
  }, []);

  const concatenar = (e) => {
    if (e === "Enter") {
      e = "=";
    }
    if (e === "c" || e === "C") {
      borrado();
      return false;
    }
    if (!digitosAceptados.includes(e)) {
      console.log('no aceptado');
      console.log(e);
      return false;
    }

    resultado = resultado.concat(...e);
    console.log("concatenar", resultado);
    setDisplay(resultado);
    if (operadores.includes(e)) {
      // setDisplay('');
      if (!detectarOperando(resultado)) {
        resultado = "";
        tipoOperacion = e;
        return false;
      }

      if (tipoOperacion === "+") {
        resultadoParcial = operador1 + operador2;
        // realizarOperacion(resultado, tipoOperacion);
        // return;
      }

      if (tipoOperacion === "-") {
        resultadoParcial = operador1 - operador2;
        // realizarOperacion(resultado, tipoOperacion);
        // return;
      }

      if (tipoOperacion === "*") {
        resultadoParcial = operador1 * operador2;
        // realizarOperacion(resultado, tipoOperacion);
        // return;
      }

      if (tipoOperacion === "/") {
        resultadoParcial = operador1 / operador2;
        // realizarOperacion(resultado, tipoOperacion);
        // return;
      }

      setDisplay(resultadoParcial);
      operador2 = 0;
      resultado = resultadoParcial.toString();
      if (e !== "=") {
        setDisplay(resultado.concat(...e));
        resultado = "";
      }
      // resultadoParcial = operador1;
      // return false;

      // return setDisplay(parseFloat(digito + digit));

      // realizarOperacion(resultado, digit);

      // resultado = "";
      // return false;
    }
  };

  const detectarOperando = (resultado) => {
    console.log("resultado", parseFloat(resultado));
    if (operador1 === 0) {
      operador1 = parseFloat(resultado);
      console.log("operando1 => ", operador1);
      // setOperando1(operador1);
      return false;
    }
    if (resultadoParcial !== 0) {
      operador1 = parseFloat(resultadoParcial);
      resultadoParcial = 0;
      return false;
    }
    if (operador2 === 0) {
      operador2 = parseFloat(resultado);
      console.log("operando2 => ", operador2);
      // setOperando2(operador2);
    }
    return true;
  };

  const armarCantidades = (e) => {
    console.log("llave", display);
    setDisplay(e);
    // if (e.key === "Enter") {
    //   e.key = "=";
    // }
    // if (operadores.includes(e.key)) {
    //   // setTeclado('');
    //   detectarOperando();
    //   return false;
    // }

    // if (!digitosAceptados.includes(e.key)) {
    //   console.log('no aceptado');
    //   console.log(e.key);
    //   return false;
    // }

    // if (e.key === ("c" || "C")) {
    //   borrado();
    //   return false;
    // }
    // let digit = teclado + e.key;

    // // digit = teclado + digit;+
    // console.log(digit);
    // if (!operadores.includes(digit)) {
    //   setDisplay(digit);
    //   setTeclado(digit);
    //   setDigito(digit);
    //   setOperando2(parseFloat(digit));
    //   // console.log(`Presionaste -> ${digit}`);
    // }
  };

  const botonPresionado = (e) => {
    console.log("boton presionado");
    console.log("op1, op2", operando1, operando2);
    let digit = e.target.value ?? e.key;
    if (e.key === "Enter") {
      digit = "=";
    }
    if (!digitosAceptados.includes(digit)) {
      console.log('no aceptado');
      console.log(digit);
      return false;
    }

    if (digit === 'c' || digit === 'C') {
      borrado();
      return false;
    }
    if (!operadores.includes(digit)) {
      setDisplay(digito + digit);
      setDigito(digito + digit);
      setOperando2(parseFloat(digito + digit));
      // console.log(`Presionaste -> ${digit}`);
    }
    if (operadores.includes(digit)) {
      setOperacion(digit);
      if (digit !== "=") setDisplay(digito + digit);
      if (!isNaN(parseFloat(digito + digit)))
        setOperando1(parseFloat(digito + digit));
      const tipoOperacion = operacion;

      if (digit === "=" || (operando1 && operando2) !== 0) {
        if ((operando1 || operando2) === 0 || isNaN(parseFloat(digito + digit)))
          return;
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
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"1"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"2"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"3"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"*"}
          />
          <br />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"4"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"5"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"6"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"/"}
          />
          <br />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"7"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"8"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"9"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"-"}
          />
          <br />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"."}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"0"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"00"}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"+"}
          />
          <br />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButtonTriple}
            numero={"="}
          />
          <BotonCalculadora
            botonPresionado={botonPresionado}
            estilo={styleButton}
            numero={"C"}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Calculadora;
