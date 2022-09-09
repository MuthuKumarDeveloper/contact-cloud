import React, { useEffect, useState } from "react";
import axios from "axios";
function Table() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://630db241109c16b9abeb24b7.mockapi.io/Cloud"
      );
      console.log(response.data);
      setUserData(response.data);
    }
    fetchData();
  }, []);

  console.log(userData, "data");

  return (
    <div className="row">
      {userData.map((usersData) => {
        return (
          <div key={usersData.id} className="card1">
            <p>Name:</p>
            <span>{usersData.name}</span>
            <br></br>
            <p>Ph-number:</p>
            <span>{usersData.phnumber}</span>
            <br></br>
            <p>Email:</p>
            <span>{usersData.email}</span>
            <br></br>
            <p>Country:</p>
            <span>{usersData.country}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
