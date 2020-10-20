import React, { useEffect, useState } from 'react';
import CHeader from '../Components/Header/C_Header';
import Card from '../Components/Card'
import firebase from 'firebase/app';
import 'firebase/auth'
import Acceso from '../Firebase/Acceso';
import Peticiones from '../Firebase/Peticiones';
import { Redirect } from 'react-router-dom';

const Home = () => {

    const [datos, setDatos] = useState([])
    const [activo, setActivo] = useState(true)

    const signOut = () => {
        firebase.auth().signOut();
        setActivo(false)
    }

    useEffect(() => {
        const getData = async () => {
            Acceso.setAccess(firebase.auth().currentUser.uid)

            const dataSnapShot = await Peticiones.getProyects()

            let newDatos = []

            await dataSnapShot.forEach(element => {
                newDatos.push(element.data())
            })

            setDatos(newDatos)
        }

        if (firebase.auth().currentUser) {
            getData()
        }
        

    }, [])

    const listCard = datos.map((val, i) => {
        return <Card data={val} key={i}/>
    })

    return (
        <div className="App">
            {
                !activo &&
                <Redirect to="/" />
            }
            {
                firebase.auth().currentUser &&
                (
                    <>
                        <CHeader user={firebase.auth().currentUser.providerData[0]} signOut={signOut} />

                        <div className="main">
                            <Card />
                            {listCard}
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Home;