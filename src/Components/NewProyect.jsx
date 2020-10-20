import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Peticiones from '../Firebase/Peticiones';
import { Redirect } from "react-router-dom";

const useStylesModal = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '1px solid rgb(87, 86, 86, 0.2)',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '70%',
        height: '60%'
    },
    marginText: {
        margin: '10px'
    },
    button: {
        margin: '20px'
    }
}));

const NewProyect = (props) => {

    const classesModal = useStylesModal();
    const [redirect, setRedirect] = React.useState(false);
    const [Titulo, setTitulo] = React.useState(0.00)
    const [Adecuacion, setAdecuacion] = React.useState(0.00)
    const [Eficiencia, setEficiencia] = React.useState(0.00)
    const [Compatibilidad, setCompatibilidad] = React.useState(0.00)
    const [Usabilidad, setUsabilidad] = React.useState(0.00)
    const [Fiabilidad, setFiabilidad] = React.useState(0.00)
    const [Seguridad, setSeguridad] = React.useState(0.00)
    const [Mantenibilidad, setMantenibilidad] = React.useState(0.00)
    const [Portabilidad, setPortabilidad] = React.useState(0.00)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const Suma = Adecuacion + Eficiencia + Compatibilidad + Usabilidad + Fiabilidad + Seguridad + Mantenibilidad + Portabilidad

        if (Suma === 100) {
            const Data = {
                Titulo,
                Calidad: {
                    Adecuacion: {
                        Porcentaje: Adecuacion,
                        PorcentajeSubCat: (Adecuacion / 3),
                        cant: 3,
                        name: 'Adecuación Funcional',
                        SubCat: {
                            CompletitudFuncional: {
                                name: 'Completitud Funcional',
                                data: []
                            },
                            CorrencionFuncional: {
                                name: 'Correción Funcional',
                                data: []
                            },
                            PertinenciaFuncional: {
                                name: 'Pertinencia Funcional',
                                data: []
                            }
                        }
                    },
                    Eficiencia: {
                        Porcentaje: Eficiencia,
                        PorcentajeSubCat: (Eficiencia / 3),
                        cant: 3,
                        name: 'Eficiencia de Desempeño',
                        SubCat: {
                            ComportamientoTemporal: {
                                name: 'Comportamiento Temporal',
                                data: []
                            },
                            UtilizacionRecursos: {
                                name: 'Utilización de Recursos',
                                data: []
                            },
                            Capacidad: {
                                name: 'Capacidad',
                                data: []
                            }
                        }
                    },
                    Compatibilidad: {
                        Porcentaje: Compatibilidad,
                        PorcentajeSubCat: (Compatibilidad / 2),
                        cant: 2,
                        name: 'Compatibilidad',
                        SubCat: {
                            Coexistencia: {
                                name: 'Coexistencia',
                                data: []
                            },
                            Interoperabilidad: {
                                name: 'Interoperabilidad',
                                data: []
                            }
                        }
                    },
                    Usabilidad: {
                        Porcentaje: Usabilidad,
                        PorcentajeSubCat: (Usabilidad / 6),
                        cant: 6,
                        name: 'Usabilidad',
                        SubCat: {
                            Inteligibilidad: {
                                name: 'Inteligibilidad',
                                data: []
                            },
                            Aprendizaje: {
                                name: 'Aprendizaje',
                                data: []
                            },
                            Operabilidad: {
                                name: 'Operabilidad',
                                data: []
                            },
                            ProteccionErrores: {
                                name: 'Protección Frente a Errores',
                                data: []
                            },
                            Estetica: {
                                name: 'Estética',
                                data: []
                            },
                            Accesibilidad: {
                                name: 'Accesibilidad',
                                data: []
                            }
                        }
                    },
                    Fiabilidad: {
                        Porcentaje: Fiabilidad,
                        PorcentajeSubCat: (Fiabilidad / 4),
                        cant: 4,
                        name: 'Fiabilidad',
                        SubCat: {
                            Madurez: {
                                name: 'Madurez',
                                data: []
                            },
                            Disponibilidad: {
                                name: 'Disponibilidad',
                                data: []
                            },
                            ToleranciaFallos: {
                                name: 'Tolerancia a Fallos',
                                data: []
                            },
                            CapacidadRecuperacion: {
                                name: 'Capacidad de Recuperación',
                                data: []
                            }
                        }
                    },
                    Seguridad: {
                        Porcentaje: Seguridad,
                        PorcentajeSubCat: (Seguridad / 5),
                        cant: 5,
                        name: 'Seguridad',
                        SubCat: {
                            Confidencialidad: {
                                name: 'Confidencialidad',
                                data: []
                            },
                            Integridad: {
                                name: 'Integridad',
                                data: []
                            },
                            NoRepudio: {
                                name: 'No Repudio',
                                data: []
                            },
                            Autenticidad: {
                                name: 'Autenticidad',
                                data: []
                            },
                            Responsabilidad: {
                                name: 'Responsabilidad',
                                data: []
                            }
                        }
                    },
                    Mantenibilidad: {
                        Porcentaje: Mantenibilidad,
                        PorcentajeSubCat: (Mantenibilidad / 5),
                        cant: 5,
                        name: 'Mantenibilidad',
                        SubCat: {
                            Modularidad: {
                                name: 'Modularidad',
                                data: []
                            },
                            Reusabilidad: {
                                name: 'Reusabilidad',
                                data: []
                            },
                            Analizabilidad: {
                                name: 'Analizabilidad',
                                data: []
                            },
                            CapacidadModificado: {
                                name: 'Capacidad de ser Modificado',
                                data: []
                            },
                            CapacidadProbado: {
                                name: 'Capacidad de ser Aprobado',
                                data: []
                            }
                        }
                    },
                    Portabilidad: {
                        Porcentaje: Portabilidad,
                        PorcentajeSubCat: (Portabilidad / 3),
                        cant: 3,
                        name: 'Portabilidad',
                        SubCat: {
                            Adaptabilidad: {
                                name: 'Adaptabilidad',
                                data: []
                            },
                            FacilidadInstalacion: {
                                name: 'Facilidad de Instalación',
                                data: []
                            },
                            CapacidadReemplazado: {
                                name: 'Capacidad de ser Reemplazado',
                                data: []
                            }
                        }
                    }
                }
            }
            
            await Peticiones.addOrEditProyect(Data);
            setRedirect(true)
        }
        else {
            alert(`La suma de sus datos es ${Suma} debe de sumar 100%`)
        }

    }

    return (
        <>
            {
                redirect &&
                <Redirect to={`/Inicio/${Titulo}`} />
            }
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classesModal.modal}
                open={props.open}
                onClose={() => props.close()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <div className={classesModal.paper + ' scroll'}>
                        <form onSubmit={handleSubmit}>
                            <h2>Crea tu proyecto.</h2>
                            <div className="flex-column">
                                <TextField id="standard-basic" label="Nombre del Proyecto" onChange={(e) => setTitulo(e.target.value)} />
                            </div>
                            <span><b>Indicacion: </b> Coloca en porcentaje el valor de cada categoria ( Ej. Seguridad = 20 (Esto representaria el 20%), si no colocas nada el valor sera 0.00%)</span>
                            <div className="flex-row">
                                <TextField className={classesModal.marginText} id="standard-basic" label="Adecuación Funcional" onChange={(e) => setAdecuacion(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basic" label="Eficiencia de Desempeño" onChange={(e) => setEficiencia(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basic" label="Compatibilidad" onChange={(e) => setCompatibilidad(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basic" label="Usabilidad" onChange={(e) => setUsabilidad(parseFloat(e.target.value))} />
                            </div>
                            <div className="flex-row">
                                <TextField className={classesModal.marginText} id="standard-basic" label="Fiabilidad" onChange={(e) => setFiabilidad(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basic" label="Seguridad" onChange={(e) => setSeguridad(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basicAdecuacion" label="Mantenibilidad" onChange={(e) => setMantenibilidad(parseFloat(e.target.value))} />
                                <TextField className={classesModal.marginText} id="standard-basic" label="Portabilidad" onChange={(e) => setPortabilidad(parseFloat(e.target.value))} />
                            </div>
                            <div className="flex-row end">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<CancelIcon />}
                                    className={classesModal.button}
                                    onClick={() => props.close()}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<SaveIcon />}
                                    className={classesModal.button}
                                    onClick={handleSubmit}
                                >
                                    Guardar
                                </Button>
                            </div>
                        </form>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}
export default NewProyect;