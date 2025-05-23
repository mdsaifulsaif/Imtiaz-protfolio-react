import React from "react";
import { Outlet } from "react-router";
import Navbar from "./../Components/Navbar";
import Footer from "../Components/Footer";

function Root() {
  //   const companies = useLoaderData();
  return (
    <div className="bg-gray-900">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Root;
