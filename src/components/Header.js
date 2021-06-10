import React from "react";
import "../styles/header.css";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AppsIcon from "@material-ui/icons/Apps";
import MessageIcon from "@material-ui/icons/Message";
export default function Header() {
  const screenName = "Music";
  return (
    <div className="header">
      <div className="left-items">
        <KeyboardArrowLeftIcon className="top-icons" />
        <KeyboardArrowRightIcon className="top-icons" />
        <div id="name">{screenName}</div>
      </div>
      <div className="right-items">
        <AppsIcon id="grid" className="top-icons" />
        <div className="left-mid-items">
          <img
            alt="view"
            className="top-icons"
            src="https://img.icons8.com/fluent-systems-regular/48/FFFFFF/day-view.png"
          />
          <img
            alt="share"
            className="top-icons"
            src="https://img.icons8.com/ios-glyphs/30/FFFFFF/share-rounded.png"
          />
          <img
            alt="attach"
            className="top-icons"
            src="https://img.icons8.com/metro/26/FFFFFF/attach.png"
          />
          <MessageIcon className="top-icons" id="message" />
        </div>
        <img
          alt="search"
          className="top-icons"
          src="https://img.icons8.com/material-outlined/48/FFFFFF/search.png"
        />
      </div>
    </div>
  );
}
