import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    IconButton: {
        background: "green"
    }
}));

export default function Button() {

    const classes = useStyles();

    return (
        <div className="ButtonDialog">
            <div className="menu">
                <div className="menuEdit">
                    <IconButton
                        className={classes.IconButton}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AddIcon />
                    </IconButton>
                </div>
                <div className="menuEliminar">
                    <IconButton
                        className={classes.IconButton}
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AddIcon />
                    </IconButton>
                </div>
            </div>
            <div className="collapsable">
                <IconButton
                    className={classes.IconButton}
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    );
}