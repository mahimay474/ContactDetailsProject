import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const ReplyMessage = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    phoneNo: "",
    message: ""
  });

  const { phoneNo, message } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    // await axios.put(`http://localhost:3003/users/${id}`, user);
     history.push("/contact");
    alert("message has been send successfully");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Reply Message</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label>to</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="To"
              name="phoneNo"
              value={phoneNo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Message</label>
            <input
              type="message"
              className="form-control form-control-lg"
              placeholder="enter a message"
              name="message"
              value={message}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-warning btn-block">Reply</button>
        </form>
      </div>
    </div>
  );
};

export default ReplyMessage;
