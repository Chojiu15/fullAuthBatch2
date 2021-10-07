import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const Profile = () => {

  const [details, setDetails] = useState({
    id : "",
    name: "",
    email: "",
  });

  useEffect(() => {
    getProfil();
  }, []);

  const getProfil = () => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    console.log(decoded);
    setDetails({
      id : decoded.user._id,
      name: decoded.user.name,
      email: decoded.user.email,
    })

  };

  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="col-sm-8 mx-auto">
          <h1 className="text-center">PROFILE</h1>
        </div>
        <table className="table col-md-6 mx-auto">
          <tbody>
          <tr>
              <td>Id</td>
              <td>{details.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{details.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{details.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
