import {db} from './Conection'

class Peticiones {

    constructor(){
        this.Peticiones = ''
    }

    addOrEditProyect = async (data) => {
        await db.collection(`Proyectos`).doc(data.Titulo).set(data)
    }

    deleteProyect = async (data) => {
        await db.collection(`Proyectos`).doc(data.Titulo).delete()
    }

    getProyects = async () => {
        const querySnapshot = await db.collection(`Proyectos`).get();

        return querySnapshot;
        // querySnapshot.forEach(element => {
        //     console.log(element.data());
        // });
    }

    getProyect = async (name) => {
        let data;
        data = {}
        const querySnapshot = await db.collection(`Proyectos`).where("Titulo", "==", name).get();

        querySnapshot.forEach(element => {
            data = element.data()
        });

        return data;
    }
}

export default new Peticiones();
