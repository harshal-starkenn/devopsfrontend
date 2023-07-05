import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Adduser from "./Adduser";
import ListUser from "./ListUser";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-user" element={<Adduser />} />
      <Route path="/list-user" element={<ListUser />} />
    </Routes>
  );
};

export default AllRoutes;
