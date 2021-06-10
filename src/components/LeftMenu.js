import React, { useState, Fragment } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import "../styles/leftMenu.css";
function LeftMenu() {
  const [selectedState, setSelectedState] = useState("Music");
  function setStatefun(name) {
    setSelectedState(name);
  }
  return (
    <div className="left-menu">
      <div className="icons">Icons</div>
      <div className="mid-item-list">
        <h6 className="menu-heading">Favourites</h6>
        <div
          className={
            selectedState === "AirDrop" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("AirDrop")}
        >
          <img
            src="https://img.icons8.com/ios/50/4a90e2/airdrop.png"
            className="icon"
            alt="AirDrop"
          />
          <span>AirDrop</span>
        </div>
        <div
          className={
            selectedState === "Recents" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Recents")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Recents
        </div>
        <div
          className={
            selectedState === "Applications"
              ? "list-item selected"
              : "list-item"
          }
          onClick={() => setStatefun("Applications")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Applications
        </div>
        <div
          className={
            selectedState === "Downloads" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Downloads")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Downloads
        </div>
        <div
          className={
            selectedState === "Pictures" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Pictures")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Pictures
        </div>
        <div
          className={
            selectedState === "Kirananto" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Kirananto")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Kirananto
        </div>
        <div
          className={
            selectedState === "Music" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Music")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Music
        </div>
        <div
          className={
            selectedState === "Movies" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Movies")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Movies
        </div>
        <div
          className={
            selectedState === "Creative Cloud Films"
              ? "list-item selected"
              : "list-item"
          }
          onClick={() => setStatefun("Creative Cloud Films")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Creative Cloud Films
        </div>
      </div>
      <div className="bottom-menu">
        <h6 className="menu-heading">Icloud</h6>
        <div
          className={
            selectedState === "Icloud Drive"
              ? "list-item selected"
              : "list-item"
          }
          onClick={() => setStatefun("Icloud Drive")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Icloud Drive
        </div>
        <div
          className={
            selectedState === "Documents" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Documents")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Documents
        </div>
        <div
          className={
            selectedState === "Desktop" ? "list-item selected" : "list-item"
          }
          onClick={() => setStatefun("Desktop")}
        >
          <HomeRoundedIcon color="Primary" className="icon" />
          Desktop
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
