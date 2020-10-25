import React from 'react'
import Divider from '@material-ui/core/Divider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Linear from './Linear'

const ResultCard = (props) => {
    const data = props.data.SubCat
    const info = []
    let progress = 0;
    let cont = 0;
    let Total = 0.00;

    for (const key in data) {

        if (data[key]['data'].length > 0) {
            const porcentaje = props.data.PorcentajeSubCat / data[key]['data'].length
            let recorrido = data[key]['data'].map((val, i) => {

                if (val.checked) {
                    Total += (porcentaje / props.data.Porcentaje) * 100
                    progress += (porcentaje / props.data.PorcentajeSubCat) * 100
                }
                return val
            })

        }

        info.push(
            <div className="subCat" key={cont}>
                <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <VisibilityIcon />
                </IconButton>
                <Linear name={data[key]['name']} progress={progress} key={cont} />
            </div>
        )
        cont++
        progress = 0
    }

    return (
        <div className="resultCard">

            <div className="Header">
                <label>{props.data.name}</label>
                <div className="icon">
                    <IconButton
                        size="small"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                        color="inherit"
                    >
                        <VisibilityIcon />
                    </IconButton>

                </div>
            </div>
            <Divider />

            <div className="Body">
                {info}
            </div>

            <div className="Footer">
                <div className="total">
                    Total: {Total === 100 ? 100 : Total === 0 ? 0 : Total.toFixed(2)}%
                </div>
            </div>
        </div>
    )
}

export default ResultCard