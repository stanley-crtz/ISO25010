import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Opciones from './Category/Opciones'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#424242',
        display: 'flex',
        height: 'min-content',
        color: '#fff'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    },
    full: {
        width: '100%'
    }
}));

export default function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changeData = (e) => {
        let lista = props.data.Calidad

        lista[e.ruta.category]["SubCat"][e.ruta.subCategory]['data'] = e.data

        props.onChange(lista)
    }

    const Categorys = props.data.Calidad
    const ListaTabs = []
    const ListaPanel = []
    let SubCategorys = []
    let cont = 0

    for (const key in Categorys) {

        ListaTabs.push(<Tab label={Categorys[key]['name']} {...a11yProps(cont)} key={cont + key} />)

        for (const keySubCat in Categorys[key]['SubCat']) {
            SubCategorys.push(
                <Opciones
                    data={Categorys[key]['SubCat'][keySubCat]}
                    Total={Categorys[key]['Porcentaje']}
                    Porcentaje={Categorys[key]['PorcentajeSubCat']}
                    posicion={{
                        category: key,
                        subCategory: keySubCat
                    }}
                    onChange={changeData}
                />)
        }

        ListaPanel.push(
            <TabPanel value={value} index={cont} key={cont}>
                {Categorys[key]['name']}
                <div className={classes.full}>
                    {SubCategorys}
                </div>
            </TabPanel>
        )

        SubCategorys = []
        cont++;
    }

    return (
        <>
            <div className={classes.root}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    {/* Nombres de los tabs */}
                    {ListaTabs}
                </Tabs>
                {/* Estos se refieren al panel que se encuentra con el tab y el index es el identificador del Tab */}
                {ListaPanel}
            </div>
        </>
    );
}