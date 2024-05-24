import Button from "@mui/material/Button";

function Boton() {
  return (
    <Button
    style={{ height: 55, margin: 5 }}
    variant="contained"
    color="success"
    type="submit"
  >
    Agregar Tarea
  </Button>
  )
}

export default Boton