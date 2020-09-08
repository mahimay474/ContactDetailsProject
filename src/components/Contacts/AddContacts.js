import React from "react";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';



const styles = () => ({
<<<<<<< HEAD
  card: {
    maxWidth: 420,
    marginTop: 50
  },
=======
 
>>>>>>> new files
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

const AddContacts = props => {
    
    
  // };
   const trueBool = true;
  const {
<<<<<<< HEAD
    classes,
=======
>>>>>>> new files
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting,
    handleBlur,
    handleReset
  } = props;

  return (
<<<<<<< HEAD
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
            <h1>Add Contacts </h1>
=======
    <div className="container">
        <div className="w-55 mx-auto p-5">
        <h2 className="text-center mb-4">Add Contacts</h2>
      <form onSubmit={handleSubmit}>
>>>>>>> new files
            <label>Full name</label>
            <TextField
              id="fullName"
              label="Full Name"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.fullName ? errors.fullName : ""}
              error={touched.fullName && Boolean(errors.fullName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
             <label>Email</label>
            <TextField
              id="email"
              type="email"
              label="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.email ? errors.email : ""}
              error={touched.email && Boolean(errors.email)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <label>Phone Number</label>
             <TextField
              id="phoneNo"
              type="tel" 
              pattern="^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$"
              label="Phone Number"
              value={values.phoneNo}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.phoneNo ? errors.phoneNo : "format(+91 9288334455)"}
              error={touched.phoneNo && Boolean(errors.phoneNo)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <label>Company Name</label>
             <TextField
              id="companyName"
              label="Company Name"
              value={values.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.companyName ? errors.companyName : ""}
              error={touched.companyName && Boolean(errors.companyName)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
            <label>Address</label>
             <TextField
              id="address"
              label="Address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.address ? errors.address : ""}
              error={touched.address && Boolean(errors.address)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          
            <Button type="submit" color="primary" disabled={isSubmitting}>
              Submit
            </Button>
           
            <Button color="secondary" onClick={handleReset}>
              CLEAR
            </Button>
      </form>
    </div>
<<<<<<< HEAD
=======
    </div>
>>>>>>> new files
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    fullName,
    email,
    phoneNo,
    companyName,
    address
  }) => {
    return {
        fullName: fullName || "",
        email: email || "",
        phoneNo: phoneNo || "",
        companyName: companyName || "",
        address: address || "",
     
    };
  },

  validationSchema: Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
    .email('E-mail is not valid!')
    .required("Email is required"),
    companyName: Yup.string().required("Company Name is required"),
    address: Yup.string().required("Address required"),
    phoneNo: Yup.string()
     .matches(new RegExp("^\\+[0-9]{1,3}.[0-9]{4,14}(?:x.+)?$"))
    .required('A Mobile number is required'),
   
  }),
 
  async handleSubmit ( values, { setSubmitting }, history) {
    setSubmitting(true);
 
    console.log(values);
    
      // submit to the server
      await axios.post("http://localhost:3003/users", values);
      history.push("/contacts");
      
      setSubmitting(false);
     
   
  }
})(AddContacts);

export default withStyles(styles)(Form);