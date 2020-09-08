import React from 'react';
import AllContactList from './AllContactList';
import Button from '@material-ui/core/button'
import { Form, FormControl } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddContacts from "../Contacts/AddContacts";
import DropdownIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  paper: {
      position: 'absolute',
      width: 450,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
 
}));
const Contacts = () => {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
return (
 <>
    <div className="View-details">
      <section className="Form">
        <div className="container">
          <div className="row">
            <div className="col-3 ml-5"><ContactsIcon />  Colors</div>
            <div className="col-3 mx-5 ml-5">Sort by: Date Created<DropdownIcon /></div>
              </div>
              <div className="row my-3 p-1">
                <div className="col-4 ml-5 ">
                  <Form className="form-center">
                    <FormControl type="text" placeholder="Search" className="" />
                  </Form>
                  </div>
                  <div className="col-4 mx-5 ml-5">
                    <Button className="style-button" onClick={handleOpen}>+ Add Contacts</Button>
                    <Modal
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={open}
                      onClose={handleClose}
                    >
                    <div style={modalStyle} className={classes.paper}>
                      <AddContacts />
                    </div>
                  </Modal>
                </div>
              </div>
            <div className="row">
              <div className="col-10 px-5 ">
                <AllContactList />
              </div>
          </div>
        </div>
      </section>
    </div>
   </> 
);
}

export default Contacts;