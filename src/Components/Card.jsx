import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from 'react-router-dom';
import NewProyect from './NewProyect';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 400,
        margin: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

const Cards = (props) => {

    const classes = useStyles();


    const [active, setActive] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {
                active &&
                <Redirect to={`/Inicio/${props.data.Titulo}`} />
            }
            <Card className={classes.root} variant="outlined" >
                <CardContent onClick={props.data ? () => setActive(true) : handleOpen}>
                    {props.data ?
                        <div className="card">
                            <h3>{props.data.Titulo}</h3>

                            <div className="listCategory">
                                <label className="categorias">Adecuación Funcional: {props.data.Calidad.Adecuacion.Porcentaje}%</label>
                                <label className="categorias">Eficiencia de desempeño: {props.data.Calidad.Eficiencia.Porcentaje}%</label>
                                <label className="categorias">Compatibilidad: {props.data.Calidad.Compatibilidad.Porcentaje}%</label>
                                <label className="categorias">Usabilidad: {props.data.Calidad.Usabilidad.Porcentaje}%</label>
                                <label className="categorias">Fiabilidad: {props.data.Calidad.Fiabilidad.Porcentaje}%</label>
                                <label className="categorias">Seguridad: {props.data.Calidad.Seguridad.Porcentaje}%</label>
                                <label className="categorias">Mantenibilidad: {props.data.Calidad.Mantenibilidad.Porcentaje}%</label>
                                <label className="categorias">Portabilidad: {props.data.Calidad.Portabilidad.Porcentaje}%</label>
                            </div>
                        </div>
                        :
                        <div className="card">
                            <AddIcon fontSize="large" />
                            <h3>Agregar Proyecto</h3>
                        </div>
                    }

                </CardContent>
            </Card>
            <NewProyect open={open} close={handleClose}/>
        </>
    )
}

export default Cards;