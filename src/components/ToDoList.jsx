import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
// import { TextField } from "@mui/material";
// import Button from "@mui/material/Button";
import TablaTareas from "./TablaTareas";
import Boton from "./Boton";
import CajaTexto from "./CajaTexto";

function ToDoList() {
  const [inputvalue, setinputvalue] = useState("");
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem('tareas');
    if (datos) {
      setTareas(JSON.parse(datos))
    }
  }, [])
  

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])
  

  const asignarTareas = (nuevaTarea) => {
    setinputvalue(nuevaTarea);
  }

  const guardarTarea = (e) => {
    e.preventDefault();
    setTareas([...tareas, {tarea: inputvalue, estado:'Pendiente'}]);
    setinputvalue("");
  };

  const borrarTarea = (nuevaListaTareas) => {
    // console.log(nuevaListaTareas)
    setTareas(nuevaListaTareas);
  }

  const editarTarea = (tareaEditada) => {
    // console.log(tareaEditada)
    localStorage.setItem('tareas', JSON.stringify(tareaEditada));
  }

  return (
    <Grid container>
      <Grid item>
        <form onSubmit={guardarTarea}>
          <h1>To Do list</h1>
          <CajaTexto asignarTareas={asignarTareas} caja={inputvalue}/>
          <Boton />
          <TablaTareas tareas={tareas} borrarTarea={borrarTarea} editarTarea={editarTarea}/>
        </form>
      </Grid>
    </Grid>
  );
}

export default ToDoList;
