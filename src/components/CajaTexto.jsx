import { TextField } from "@mui/material";

function CajaTexto(asignarTareas) {
  
    const guardarTarea = (e) => {
      asignarTareas.asignarTareas(e.target.value);
    };
  
  return (
    <TextField
    id="filled-basic"
    variant="outlined"
    style={{ height: 50, margin: 5, width: 400 }}
    onChange={guardarTarea}
    value={asignarTareas.caja}
  />
  )
}

export default CajaTexto;
