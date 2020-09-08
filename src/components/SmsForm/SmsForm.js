import React from "react";
import { withFormik } from "formik";
import * as Yup from 'yup';
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
 import axios from 'axios';
import { Card, CardContent, CardActions } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";


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

const { id } = useParams(); 
  // };
   const trueBool = true;
  const {
    values,
    touched,
    errors,
    handleSubmit,
    handleChange,
    isSubmitting,
    handleBlur
  } = props;

  return (
    <div className="container">
    <Card className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">Message Box</h2>
      <CardContent>
      <form onSubmit={handleSubmit}>
            <label>To</label>
             <TextField
              id="phoneNo"
              type="tel" 
              pattern="^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$"
              label="To"
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
           
            <label>body</label>
             <TextField
              id="message"
              label="Message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              multiline={trueBool}
              helperText={touched.message ? errors.message : ""}
              error={touched.message && Boolean(errors.message)}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          
          
      </form>
      </CardContent>
      <CardActions>
      <Button type="submit" color="primary" disabled={isSubmitting}>
              Send
            </Button>
           
            <Link
                    class="btn mr-2"
                    to={`/user/replymessage/:id`}
                  >
                    Reply
            </Link>
      </CardActions>
      </Card>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    phoneNo,
    message
   
  }) => {
    return {
      phoneNo: phoneNo || "",
        message: message || "",
     
    };
  },

  validationSchema: Yup.object().shape({
    message: Yup.string().required("message required"),
    phoneNo: Yup.string()
     .matches(new RegExp("^\\+[0-9]{1,3}.[0-9]{4,14}(?:x.+)?$"))
    .required('contact required'),
   
  }),

  async handleSubmit ( values, { setSubmitting }, history ,id) {
    setSubmitting(true);
    alert("message send successfully");
   
    console.log(values);
    
      // submit to the server
       await axios.post(`http://localhost:3003/users/${id}`, values);
       history.push("/contact");
       
     
      setSubmitting(false);
     
   
  }
})(SmsForm);

export default withStyles(styles)(Form);

