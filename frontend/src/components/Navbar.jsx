import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    margin: "0 10px",
    textDecoration: "none",
    color: isActive ? "#007bff" : "#333",
  });

  return (
    <nav
      style={{
        padding: "10px 20px",
        borderBottom: "1px solid #eee",
        marginBottom: 20,
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/imoveis" style={linkStyle}>
        Listar Imóveis
      </NavLink>
    </nav>
  );
}
