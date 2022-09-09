import React, { useState } from "react";
import Axios from "axios";

function User() {
  const [name, setName] = useState("");
  const [phnumber, setPhnumber] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (name === "" && phnumber === "" && email === "" && country === "") {
      alert("Please fill all the Fields");
    } else {
      Axios.post("https://630db241109c16b9abeb24b7.mockapi.io/Cloud", {
        name,
        phnumber,
        email,
        country,
      })
        .then(() => {
          setName("");
          setPhnumber("");
          setEmail("");
          setCountry("");
        })
        .catch((err) => {
          console.log("Error");
        });
      setTimeout(() => {
        console.log("added");
      }, 500);
    }
  };

  return (
    <div className="container-fluid col-lg-6 col-md-6 col-8">
      <form className="form  my-5 abc1">
        <h4 className="heading">Your Contact List</h4>
        <input
          className="form-control my-2 inpu1"
          type="text"
          size={15}
          placeholder="Enter Username"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="number"
          size={10}
          placeholder="Enter Your Ph-Number"
          required
          value={phnumber}
          onChange={(e) => setPhnumber(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="Email"
          size={30}
          placeholder="Enter Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="text"
          size={15}
          placeholder="Enter Your Country"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />

        <button className="btn btn-primary my-4 button" onClick={addUser}>
          Add-User
        </button>
      </form>
    </div>
  );
}

export default User;
