import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth'
import CHeader from '../Components/Header/C_Header';
import { Redirect } from 'react-router-dom';
import Peticiones from '../Firebase/Peticiones';
import Tabs from '../Components/Tabs'
import ResultCard from '../Components/ResultCard';
import Swal from 'sweetalert2'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(range, calificacion, clasificacion, color) {
    return { range, calificacion, clasificacion, color };
}

const Proyecto = (props) => {
    const classes = useStyles();

    const [activo, setActivo] = useState(true)
    const [data, setData] = useState({})
    const [result, setResult] = useState([]);
    const [redirect, setRedirect] = useState(false)
    const [total, setTotal] = useState(0)

    const verificacion = (x, y) => {
        return total >= x && total <= y ? <DoneIcon/> : <CloseIcon/>
    }

    const verificacionColor = (x, y) => {
      console.log(total)
        return total >= x && total <= y ? true : false
    }

    const rows = [
        createData('0.95 =< X 1', "Muy Buena", 'Liberado', verificacionColor(95, 100)),
        createData('0.90 =< X 0.94', "Bueno", 'Liberado', verificacionColor(90, 94)),
        createData('0.75 =< X 0.89', "Aceptable", 'Liberado', verificacionColor(75, 89)),
        createData('0.50 =< X 0.74', "Regular", 'No Liberado', verificacionColor(50, 74)),
        createData('X <= 0.49', "Deficiente", 'No Liberado', verificacionColor(0, 49)),
    ];

    const save_Or_delete = async (option) => {


        if (option) {
            await Peticiones.addOrEditProyect(data)
        }
        else {
            Swal.fire({
                title: 'Eliminando Proyecto...',
                allowOutsideClick: false,
                onBeforeOpen: () => {
                    Swal.showLoading()
                },
            });
            await Peticiones.deleteProyect(data)
            Swal.close()
            setRedirect(true)
        }
    }

    const change = (e) => {
        let list = data;

        list.Calidad = e

        setData(list)
        renderResult(list)
    }

    const renderResult = (lista, inicial = [], cont = 0) => {

        let Total = 0
        const chartData = [['Categoria', 'Porcentaje']]

        for (const key in lista.Calidad) {
            inicial.push(<ResultCard data={lista['Calidad'][key]} key={cont + key} />)

            for (const keySubCat in lista['Calidad'][key]['SubCat']) {

                const porcentaje = lista['Calidad'][key]['PorcentajeSubCat'] / lista['Calidad'][key]['SubCat'][keySubCat]['data'].length
                lista['Calidad'][key]['SubCat'][keySubCat]['data'].map((val, i) => {
                    if (val.checked) {
                        Total += porcentaje
                    }
                    return val
                })

            }


            chartData.push([lista['Calidad'][key]['name'], Total])

        }
        setResult(inicial)
        setTotal(Total)
    }

    const signOut = () => {
        firebase.auth().signOut();
        setActivo(false)
    }

    useEffect(() => {

        const getData = async () => {
            const lista = await Peticiones.getProyect(props.match.params.name)
            setData(lista)
            renderResult(lista)
        }

        getData()

    }, [])


    return (
        <>
            <div className="App">
                {
                    redirect &&
                    <Redirect to="/Inicio" />
                }
                {
                    !activo &&
                    <Redirect to="/" />
                }
                {
                    firebase.auth().currentUser &&
                    (
                        <>
                            <CHeader save={save_Or_delete} user={firebase.auth().currentUser.providerData[0]} signOut={signOut} proyect={true} title={props.match.params.name} />

                            <div className="main">
                                <Tabs data={data} onChange={change} />
                            </div>

                            <div className="App margin">
                                RESULTADOS
                                <hr/>
                            </div>

                            <div className="resultados">
                                <div className={total >= 75 ? "APROBADO" : "REPROBADO"}>
                                    <label>{total >= 75 ? "APROBADO" : "REPROBADO"}</label>
                                </div>
                                <hr />
                                <div className="cuadroResult">
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Rango</TableCell>
                                                    <TableCell align="right">Calificación</TableCell>
                                                    <TableCell align="right">clasificacion</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.range} className={row.color ? (total >= 75 ? "greend" : "red" ) : ""}>
                                                        <TableCell component="th" scope="row">
                                                            {row.range}
                                                        </TableCell>
                                                        <TableCell align="right">{row.calificacion}</TableCell>
                                                        <TableCell align="right">{row.clasificacion}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>

                            <div className="main margin">
                                Resultados detallados.
                                <hr/>
                                <div className="left">
                                    {result}
                                </div>
                            </div>

                        </>
                    )
                }
            </div>
        </>
    )
}

export default Proyecto;
