import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import AllContactList from './AllContactList';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/button'
import { Form, FormControl } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AddContacts from "../Contacts/AddContacts";
import DropdownIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ContactsIcon from '@material-ui/icons/Contacts';


const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  .style-button {
    background: linear-gradient(75deg,rgba(255,142,83,1)40%, rgba(254,107,139,1)70% );
  }
 
`;

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
 
<React.Fragment>
<Wrapper>
    <div container>
      <Toolbar>
        <Grid container spacing={2} xs={12}>
          <Grid item  container xs={4}>
           
           <Typography variant="h6" gutterBottom><ContactsIcon />  Colors</Typography>
                </Grid>
                <Grid item xs={8}>
                  Sort by: Date Created<DropdownIcon />
                </Grid>
              </Grid>
            </Toolbar>
            <Toolbar>
      <Grid container spacing={3} xs={12}>
        <Grid item xs={4}>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      </Grid>
      <Grid item xs={8}>
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
        </Grid>
        </Grid>
      </Toolbar>
      <Grid container spacing ={3}>
      <Grid item xs={12}>
    <AllContactList />
    </Grid>
    </Grid>
    </div>
    </Wrapper>
    </React.Fragment>
    
);
}

export default Contacts;