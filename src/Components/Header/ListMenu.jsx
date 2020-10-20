import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BallotIcon from '@material-ui/icons/Ballot';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import NewProyect from '../NewProyect'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NestedList = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);
  const [redirect, setRedirect] = React.useState(false)

  const closeMenu = (change) => {

    if (change) {
      setRedirect(true)
    }
    else {
      setOpenModal(true)
    }
    props.hide('')
  }

  return (
    <>
      {
        redirect &&
        <Redirect to="/Inicio" />
      }
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Lista de Items
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button={true} onClick={() => closeMenu(true)}>
          <ListItemIcon>
            <BallotIcon />
          </ListItemIcon>
          <ListItemText primary="Todos los proyectos" />
        </ListItem>

        <ListItem button={true} onClick={() => closeMenu(false)}>
          <ListItemIcon>
            <AddCircleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Nuevo Proyecto" />
        </ListItem>

        {
          props.proyect &&
          <>
            <Divider />

            <ListItem button={true} onClick={() => closeMenu(true)}>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Eliminar Proyecto" />
            </ListItem>
          </>
        }
      </List>
      <NewProyect open={openModal} close={() => setOpenModal(false)} />
    </>
  );
}

export default NestedList