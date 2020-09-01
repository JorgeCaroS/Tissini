import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { BrowserRouter, Route, Switch, Redirect, withRouter, NavLink } from "react-router-dom";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { pink } from '@material-ui/core/colors';

export default function Footer() {
  return (
      <footer>
    <div className="footer-div">
      <div className="footer-icons">
        <div className="single-icon">
          <HomeIcon style={{ color: pink[200] }}fontSize="large"/> 
          <NavLink to="/categorias">Categorías</NavLink>
        </div>
        <div className="single-icon">
          <AssignmentIndOutlinedIcon style={{ color: pink[200] }} fontSize="large" />
          <NavLink to="/catalogo">Catálogo</NavLink>

        </div>
        <div className="single-icon">
          <ShoppingCartOutlinedIcon style={{ color: pink[200] }} fontSize="large" />
          <span>Carrito</span>
        </div>
      </div>
    </div>
    </footer>
  );
}
