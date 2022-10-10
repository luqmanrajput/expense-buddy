import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <h1> Expense Buddy</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/Create">Create</Link>
      <Link to="/Edit">Edit</Link>
      <Link to="/Help">Help</Link>
    </>
  );
};

export default Header;
