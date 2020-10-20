import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RigthMenu from './RigthMenu'
import LeftMenu from './LeftMenu'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const Header = (props) => {
    
    const classes = useStyles();

    const signOut = () => {
        props.signOut('')
    }

    return (
        <div className={classes.root}>

            <AppBar position="static">
                <Toolbar>
                    <div>
                        <LeftMenu/>
                    </div>
                    <Typography variant="h6" className={classes.title}>
                        ISO25010
                    </Typography>
                    <div>
                        <RigthMenu user={props.user} signOut={signOut}/>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;