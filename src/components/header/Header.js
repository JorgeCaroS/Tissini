import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

export default function Header() {
  return (
    <header>
      <div className="header-div">
        <div className="header-icons">
          <div className="single-icon">
            <PhoneIcon fontSize="large" />
          </div>
          <div className="single-icon">
            <ExitToAppIcon fontSize="large" />
          </div>
        </div>
      </div>
    </header>
  );
}
