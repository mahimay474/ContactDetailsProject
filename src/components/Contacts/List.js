import React, { useState, useEffect } from "react";
import axios from "axios";
import MailIcon from '@material-ui/icons/Mail';


const List = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data.reverse());
  };

  return (
    <div className="container">
      <div className="py-4">
        <table >
          <thead >
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Contacts</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                {/* <th scope="row">{index + 1}</th> */}
                <td>{user.fullName} <MailIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
