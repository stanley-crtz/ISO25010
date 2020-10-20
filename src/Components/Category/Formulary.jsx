import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Formulary = (props) => {

    const [text, setText] = useState('')

    const Submit = (e) => {
        e.preventDefault()

        props.onSubmit(text.trim())

        setText("")
    }

    const Cancel = () => {
        props.cancel(false)
    }

    useEffect(() => {
        if (props.modal) {
            setText(props.text)
        }
    }, [])

    return (
        <form onSubmit={Submit} className="aggregateData">
            <TextField value={text} className="fieldText" id="standard-basic" label="Nombre" onChange={(e) => setText(e.target.value)} />
            <Button onClick={Submit} variant="contained" color="primary">
                Guardar
            </Button>
            {
                props.modal &&
                <div className="button">
                    <Button onClick={Cancel} variant="contained" color="secondary" className="button">
                        Cancelar
                    </Button>
                </div>
            }
        </form>
    )
}

export default Formulary