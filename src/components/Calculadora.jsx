import { TextField, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import BotonCalculadora from './BotonCalculadora';

let resultado = '';
let operador1 = 0;
let operador2 = 0;
let resultadoParcial = 0;
let tipoOperacion = '';

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

	const [display, setDisplay] = useState('0');

	const operadores = ['*', '/', '-', '+', '='];
	const digitosAceptados = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'0',
		'/',
		'-',
		'*',
		'+',
		'c',
		'C',
		'Enter',
		'=',
	];

	const borrado = () => {
		setDisplay('0');
    resultado = '';
    operador1 = 0;
    operador2 = 0;
    resultadoParcial = 0;
    tipoOperacion = '';
    
	};

	useEffect(() => {
		eventTeclado();
	}, []);

	const eventTeclado = () => {
		document.addEventListener('keyup', (event) => {
			concatenar(event.key);
		});
	};

	const validarEntrada = (e) => {
		if (!digitosAceptados.includes(e)) {
			console.log('no aceptado', e);
			return false;
		}
		if (e === 'c' || e === 'C') {
			borrado();
			return false;
    }
    return true;
  };
  
  const detectarOperando = (resultado) => {
		if (operador1 === 0) {
			operador1 = parseFloat(resultado);
			return false;
		}
		if (resultadoParcial !== 0 && tipoOperacion !== '=') {
      operador2 = parseFloat(resultado);
			resultadoParcial = 0;
			return true;
		}
		if (operador2 === 0 && tipoOperacion !== '=') {
			operador2 = parseFloat(resultado);
		}
		return true;
	};

	const concatenar = (e) => {
		if (!validarEntrada(e)) {
			return false;
		}
		if (e === 'Enter') {
			e = '=';
		}
		if (operadores.includes(e)) {
      if (!detectarOperando(resultado)) {
        setDisplay(resultado + e)
				resultado = '';
        tipoOperacion = e;
				return false;
      }
			if (tipoOperacion === '+') {
				resultadoParcial = operador1 + operador2;
			}
			if (tipoOperacion === '-') {
				resultadoParcial = operador1 - operador2;
			}
			if (tipoOperacion === '*') {
				resultadoParcial = operador1 * operador2;
			}
			if (tipoOperacion === '/') {
				resultadoParcial = operador1 / operador2;
      }
      setDisplay(e !== '=' ? resultadoParcial + e : resultadoParcial);
      resultado = resultadoParcial + e;
      tipoOperacion = e;
      resultado = e !== '=' ? '' : resultadoParcial;
      operador1 = resultadoParcial;
      operador2 = 0;
			return false;
		}
    resultado = resultado + e;
    setDisplay(resultado);
	};

	const botonPresionado = (e) => {
		concatenar(e.target.value);
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
						id='filled-basic'
						InputProps={{
							readOnly: true,
						}}
						variant='outlined'
						value={display}
					/>
					<br />
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'1'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'2'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'3'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'*'}
					/>
					<br />
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'4'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'5'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'6'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'/'}
					/>
					<br />
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'7'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'8'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'9'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'-'}
					/>
					<br />
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'.'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'0'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'00'}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'+'}
					/>
					<br />
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButtonTriple}
						numero={'='}
					/>
					<BotonCalculadora
						botonPresionado={botonPresionado}
						estilo={styleButton}
						numero={'C'}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default Calculadora;
