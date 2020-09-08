import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import { Grid, ListItem, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import SmsButton from '../Button/SmsButton';

const ViewUser = () => {
   const [user, setUser] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNo: "",
    address: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container">
      <section className="Form">
        <div className="container">
          <div className="row mx-auto">
            <div className="col-10 mx-5 shadow p-5">
            <h1 className="text-center mb-4">View Details</h1>
              <Typography variant="h4" className="text-center mb-4" gutterBottom>
              <h3>Name: {user.fullName}</h3></Typography>
              <Typography className="text-center" variant="subheading" gutterBottom>
              <p>Email: {user.email}</p>
              </Typography>
      
            <div className ="row"> 
              <div className ="col-md-5">
                <ListItem>
              
            <Grid item xs={6}> Full Name: </Grid>
              <Grid item xs={6}>{user.fullName}</Grid>
              </ListItem>
                <ListItem> <Grid item xs={6}> Company: </Grid>
              <Grid item xs={6}>{user.companyName}</Grid></ListItem>
              <ListItem> <Grid item xs={6}> Email: </Grid>
              <Grid item xs={6}>{user.email}</Grid></ListItem>
              <ListItem> <Grid item xs={6}> Contact: </Grid>
              <Grid item xs={6}>{user.phoneNo}</Grid></ListItem>
              <ListItem> <Grid item xs={6}> Address: </Grid>
              <Grid item xs={6}>{user.address}</Grid></ListItem>
              </div>
              <div className="col-md-5 mx-2">
                <h1> Chat Message</h1>
                <Link
                    class="btn mr-2"
                    to={`/user/message/:id`}
                  >
                    <SmsButton />
             </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
};

export default ViewUser;
