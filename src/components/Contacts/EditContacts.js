import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNo: "",
    address: ""
  });

  const { fullName, companyName, email, phoneNo, address } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
<<<<<<< HEAD
    history.push("/contacts");
=======
    history.push("/contact");
>>>>>>> new files
    alert("Updated successfully");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label>Full Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Full Name"
              name="fullName"
              value={fullName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Company Name</label>
            <input
              type="companyName"
              className="form-control form-control-lg"
              placeholder="Enter Your Company"
              name="companyName"
              value={companyName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Email</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Contact Number</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phoneNo"
              value={phoneNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
