import React from "react";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';



const styles = () => ({
  card: {
    maxWidth: 420,
    marginTop: 50
  },
  container: {
    display: "Flex",
    justifyContent: "center"
  },
  actions: {
    float: "right"
  }
});

const SmsForm = props => {
    
    
  // };
   const trueBool = true;
  const {
    classes,
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting,
    handleBlur
  } = props;

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
            <h1>Add Contacts </h1>
            <label>To</label>
            <TextField
              id="to"
              label="Full Name"
              type="tel"
              value={values.to}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.to ? errors.to : ""}
              error={touched.to && Boolean(errors.to)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
             <labe>body</labe>
            <TextField
              id="body"
              type="text"
              label="Message"
              value={values.body}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.body ? errors.body : ""}
              error={touched.body && Boolean(errors.body)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          
            <Button type="submit" color="primary" disabled={isSubmitting}>
              Send
            </Button>
      </form>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    to,
    body
  }) => {
    return {
        to: to || "",
        body: body || ""
     
    };
  },

  validationSchema: Yup.object().shape({
    to: Yup.string().required("Number is required"),
    body: Yup.string().required("Message is required"),
  }),
 
  async handleSubmit ( values, { setSubmitting }, history) {
    setSubmitting(true);
 
    alert("message has been submitted");
    
      // submit to the server
    //   await axios.post("http://localhost:3003/users/id", values);
    //   history.push("/user/${}");
      
      setSubmitting(false);
     
   
  }
})(SmsForm);

export default withStyles(styles)(Form);


