import Button from "@mui/material/Button";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Modal,
} from "@mui/material";
import { useState } from "react";

function TablaTareas(tareas) {
  const listaTareas = tareas.tareas;
  const [open, setOpen] = useState(false);
  const [idBoton, setIdBoton] = useState("");
  const [tareaFinalizar, setTareaFinalizar] = useState("");

  const handleOpen = (e) => {
    setIdBoton(e.target.value);
    const identificarTarea = listaTareas.filter(
      (tarea) => tarea.tarea === e.target.value
    );
    setTareaFinalizar(identificarTarea[0].tarea);
    setOpen(true);
  };

  const cerrarModal = () => {
    setOpen(false);
    console.log(tareaFinalizar);
  };

  const style = {
    position: "absolute",
    top: "20%",
    left: "40%",
    width: 400,
    height: 200,
  };

  const styleBodyModal = {
    textAlign: "center",
    backgroundColor: "#000",
    width: 400,
    height: 200,
    color: "#fff",
  };

  const borrarRegistro = (e) => {
    const claveRegistro = e.target.value;
    // console.log('ID Registro', e.target.value);
    tareas.borrarTarea(
      listaTareas.filter((tarea) => tarea.tarea != claveRegistro)
    );
  };

  const editarRegistro = (e) => {
    e.target.disabled = true;
    const claveRegistro = e.target.value;
    setOpen(false);
    const indiceEditar = listaTareas.findIndex(
      (l) => l.tarea === claveRegistro
    );
    listaTareas[indiceEditar].estado = "Finalizado";
    tareas.editarTarea(listaTareas);
    document.getElementById(claveRegistro).disabled;
  };

  const Pendiente = { "td, th": { border: 0, background: "#c62828" } };

  const Finalizado = { "td, th": { border: 0, background: "#69f0ae" } };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Lista de Tareas</TableCell>
              <TableCell>Estado</TableCell>
              <TableCell>Completar</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listaTareas.map((row) => (
              <TableRow
                key={row.tarea}
                sx={row.estado === "Finalizado" ? Finalizado : Pendiente}
              >
                <TableCell component="th" scope="row" background="blue">
                  <h3>{row.tarea}</h3>
                </TableCell>
                <TableCell>
                  <h3>{row.estado}</h3>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    value={row.tarea}
                    color="secondary"
                    onClick={handleOpen}
                    id={row.tarea}
                    disabled={row.estado === "Finalizado" ? true : false}
                  >
                    E
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    value={row.tarea}
                    color="error"
                    onClick={borrarRegistro}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={cerrarModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={style}
        variant="filled"
      >
        <Grid container>
          <Grid item xs={12} style={styleBodyModal}>
            <h1>Finalizar tarea</h1>
            <h4>
              Deseas finalizar la tarea <b>{tareaFinalizar}</b> ?
            </h4>
            <Button
              variant="contained"
              color="success"
              onClick={editarRegistro}
              value={idBoton}
            >
              Aceptar
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
}

export default TablaTareas;
