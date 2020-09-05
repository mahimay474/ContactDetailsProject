import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import {CardContent, Grid, ListItem, Typography} from "@material-ui/core";
import SmsForm from "../SmsForm/SmsForm";
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
      <div className="w-75 mx-auto shadow p-5">
      <h1 className="text-center mb-4">Contact Details</h1>
        <Typography variant="h6" className="text-center mb-4" gutterBottom>
         <h1>{user.fullName}</h1></Typography>
         <Typography className="text-center" variant="subheading" gutterBottom>
         <p>{user.email}</p>
         </Typography>
        <CardContent>
   
        <div className ="row "> 
        <div className ="col-8">
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
           <div className="col-4">
             <SmsForm />
           </div>
           </div>
       </CardContent>
       
      </div>
    </div>
  );
  
};

export default ViewUser;
