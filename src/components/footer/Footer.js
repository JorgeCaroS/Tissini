import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

export default function Footer() {
  return (
      <footer>
    <div className="footer-div">
      <div className="footer-icons">
        <div className="single-icon">
          <HomeIcon fontSize="large"/> 
          <span>Categorías</span>
        </div>
        <div className="single-icon">
          <AssignmentIndOutlinedIcon fontSize="large" />
          <span>Catálogos</span>
        </div>
        <div className="single-icon">
          <ShoppingCartOutlinedIcon fontSize="large" />
          <span>Carrito</span>
        </div>
      </div>
    </div>
    </footer>
  );
}
