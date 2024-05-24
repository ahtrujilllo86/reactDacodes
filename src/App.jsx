// import './App.css'
import Calculadora from "./components/Calculadora.jsx";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container>
        <Grid item md={5} xs={12}>
          <Calculadora />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
