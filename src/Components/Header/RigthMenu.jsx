import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        margin: '0 auto',
        marginBottom: '10px'
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));

const MenuRigth = (props) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = () => {
        props.signOut('')
    }

    return (
        <Fragment>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <Avatar className={classes.small} alt={props.user.displayName} src={props.user.photoURL} />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <div className="container-user">
                    <Avatar className={classes.large} alt={props.user.displayName} src={props.user.photoURL} />
                    <label>{props.user.displayName}</label>
                    <label>{props.user.email}</label>
                    <hr />
                    <input className='buttonSingOut' type="button" value="Cerrar Sesion" onClick={handleSignOut} />
                </div>
            </Menu>
        </Fragment>
    );
}

export default MenuRigth;