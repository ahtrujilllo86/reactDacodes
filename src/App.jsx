// import './App.css'
import ToDoList from "./components/ToDoList.jsx";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container>
        <Grid item md={7} xs={12}>
          <ToDoList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
