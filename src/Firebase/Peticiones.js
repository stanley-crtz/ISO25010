import {db} from './Conection'
import Acceso from './Acceso'

class Peticiones {

    constructor(){
        this.Peticiones = ''
    }

    addOrEditProyect = async (data) => {
        await db.collection(`${Acceso.getAccess()}-Proyectos`).doc(data.Titulo).set(data)
    }

    deleteProyect = async (data) => {
        await db.collection(`${Acceso.getAccess()}-Proyectos`).doc(data.Titulo).delete()
    }

    getProyects = async () => {
        const querySnapshot = await db.collection(`${Acceso.getAccess()}-Proyectos`).get();

        return querySnapshot;
        // querySnapshot.forEach(element => {
        //     console.log(element.data());
        // });
    }

    getProyect = async (name) => {
        let data;
        data = {}
        const querySnapshot = await db.collection(`${Acceso.getAccess()}-Proyectos`).where("Titulo", "==", name).get();

        querySnapshot.forEach(element => {
            data = element.data()
        });

        return data;
    }
}

export default new Peticiones();