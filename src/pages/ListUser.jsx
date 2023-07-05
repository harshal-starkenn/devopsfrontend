import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListUser = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("http://localhost:9001/api/user/getuser")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    } catch {
      console.log("Failed to load User Data");
    }
  }, []);

  return (
    <div className="container mx-auto p-4  ">
      <h1 className="text-2xl font-bold mb-4">List of Users</h1>
      <table className="min-w-full border-4 border-black rounded-lg bg-gradient-to-b from-red-200 to-green-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-4 border-black">First Name</th>
            <th className="py-2 px-4 border-b-4 border-black">Last Name</th>
            <th className="py-2 px-4 border-b-4 border-black">Email</th>
            <th className="py-2 px-4 border-b-4 border-black">Full Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b-4 border-black">
                {el.first_name}
              </td>
              <td className="py-2 px-4 border-b-4 border-black">
                {el.last_name}
              </td>
              <td className="py-2 px-4 border-b-4 border-black">{el.email}</td>
              <td className="py-2 px-4 border-b-4 border-black">
                {el.first_name + " " + el.last_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="m-4">
        <button
          className="py-2 px-4 rounded-md bg-blue-500 text-white"
          onClick={() => navigate("/")}
        >
          Navigate to HomePage
        </button>
      </div>
    </div>
  );
};

export default ListUser;
