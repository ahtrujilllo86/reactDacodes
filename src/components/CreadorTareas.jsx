import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";

function CreadorTareas() {
  const [inputvalue, setinputvalue] = useState("");
  const [tareas, setTareas] = useState([]);

  const guardarTarea = (e) => {
    e.preventDefault();
    setTareas([...tareas, inputvalue]);
    console.log(tareas);
    setinputvalue("");
  };

  function asignarTexto(e) {
    setinputvalue(e.target.value);
  }

  return (
    <>
      <form onSubmit={guardarTarea}>
        <h1>To Do list</h1>
        <TextField
          id="filled-basic"
          variant="outlined"
          style={{ height: 50, margin: 5, width: 400 }}
          onChange={asignarTexto}
          value={inputvalue}
        />
        <Button
          style={{ height: 55, margin: 5 }}
          variant="contained"
          color="success"
          type="submit"
        >
          Agregar Tarea
        </Button>
      </form>
    </>
  );
}

export default CreadorTareas