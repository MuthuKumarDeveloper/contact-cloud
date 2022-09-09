import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container-fluid col-lg-6 col-md-6 col-8 king">
      <form className="form  my-5 abc">
        <h4 className="heading">Login Your Account</h4>
        <input
          className="form-control my-4 inpu"
          type="text"
          placeholder="Enter Username"
          required
        />

        <input
          className="form-control inpu"
          type="password"
          placeholder="Enter Your Password"
          required
        />

        <Link to="/Detail" className="btn btn-primary my-4 button">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Login;
