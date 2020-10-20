class Accesso {

    constructor() {
        this.acceso = ''
    }

    setAccess = (uid) => {
        this.acceso = uid
    }

    getAccess = () => {
        return this.acceso
    }
}

export default new Accesso();