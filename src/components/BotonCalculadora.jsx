import Button from "@mui/material/Button";

function BotonCalculadora(botonPresionado) {
    // console.log(botonPresionado);
  const { numero, estilo } = botonPresionado;

  const botonPress = (e) => {
    botonPresionado.botonPresionado(e)
  };

  return (
    <Button
      style={estilo}
      variant="contained"
      value={numero}
      onClick={botonPress}
    >
      {numero}
    </Button>
  );
}

export default BotonCalculadora;
