import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/imoveis"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Listar Imóveis
      </NavLink>
    </nav>
  );
}
