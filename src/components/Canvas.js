import React, { useEffect, useState } from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { render } from "react-dom";
import "../styles/canvas.css";
function Canvas() {
  const [folder, setFolder] = useState(false);
  const [input, setInput] = useState(true);
  const [folderName, setFolderName] = useState("New Folder");
  function folderClick(e) {
    if (e.key === "Enter") {
      const value = document.getElementById("input").value;
      setFolderName(value);
      setInput(false);
      return;
    }
  }
  function HandleClick() {
    console.log("Second Click");
    setFolder(true);
    return (
      <div className="folder">
        <img
          src="https://icon-library.net//images/ios-folder-icon/ios-folder-icon-6.jpg"
          alt="folder-icon"
          width="50"
        />
        {input && (
          <input
            className="folder-icon-name"
            onKeyDown={(e) => folderClick(e)}
            id="input"
          ></input>
        )}
        {!input && <h6 className="icon-name">{folderName}</h6>}
      </div>
    );
  }
  return (
    <ContextMenuTrigger id="menu">
      <div className="canvas">
        {folder && <HandleClick />}
        <ContextMenu className="menu" id="menu">
          <MenuItem className="menuItem" onClick={HandleClick}>
            Create
          </MenuItem>
          <MenuItem className="menuItem">Delete</MenuItem>
        </ContextMenu>
      </div>
    </ContextMenuTrigger>
  );
}

export default Canvas;
