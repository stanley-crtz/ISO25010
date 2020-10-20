import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth'
import CHeader from '../Components/Header/C_Header';
import { Redirect } from 'react-router-dom';
import Peticiones from '../Firebase/Peticiones';
import Tabs from '../Components/Tabs'
import Tooltips from '../Components/Tooltips'

const Proyecto = (props) => {

    const [activo, setActivo] = useState(true)
    const [data, setData] = useState({})

    const change = (e) => {
        let list = data;

        list.Calidad = e

        setData(list)

        console.log(list);

    }

    const signOut = () => {
        firebase.auth().signOut();
        setActivo(false)
    }

    useEffect(() => {

        const getData = async () => {
            const lista = await Peticiones.getProyect(props.match.params.name)
            console.log(lista);
            setData(lista)
        }

        getData()
    }, [])


    return (
        <>
            <div className="App">
                {
                    !activo &&
                    <Redirect to="/" />
                }
                {
                    firebase.auth().currentUser &&
                    (
                        <>
                            <CHeader user={firebase.auth().currentUser.providerData[0]} signOut={signOut} proyect={true} title={props.match.params.name}/>

                            <div className="main">

                                <Tabs data={data} onChange={change} />

                            </div>

                        </>
                    )
                }
            </div>
        </>
    )
}

export default Proyecto;