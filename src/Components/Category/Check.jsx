import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Formulary from './Formulary';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Check = (props) => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const edit = (e) => {
    props.edit({indice: props.indice, value: e})
    setOpen(false);
  }

  const checked = (check) => {

  }


  return (
    <div className="check">

      <div className="name">

        <label><input type="checkbox" name={props.label} onChange={(e) => checked(e.target.checked)}/> {props.label}</label>

      </div>

      <div className="icon delete" onClick={(e) => props.remove(props.indice)}><DeleteIcon /></div>
      <div className="icon edit" onClick={handleOpen}><EditIcon /></div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Formulary modal={true} onSubmit={edit} cancel={handleClose} text={props.label}/>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}

export default Check