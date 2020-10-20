import React, { Fragment } from "react";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import ListMenu from './ListMenu'

const LeftMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Fragment>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <SettingsIcon/>
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
                <div>
                    <ListMenu hide={handleClose}/>
                </div>
            </Menu>
        </Fragment>
    );
}

export default LeftMenu;