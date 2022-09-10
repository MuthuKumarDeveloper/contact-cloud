import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container-fluid col-lg-6 col-md-6 col-8">
      <form className="form  my-5 abc1">
        <h4 className="heading">Register Your Account</h4>
        <input
          className="form-control my-2 inpu1"
          type="text"
          placeholder="Enter Username"
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="Email"
          placeholder="Enter Your Email"
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="password"
          placeholder="Enter Your Password"
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="password"
          placeholder="Enter Your Confrim"
          required
        />
        <Link to="/" className="btn btn-primary my-4 button">
          Register
        </Link>
      </form>
    </div>
  );
}
export default Register;
