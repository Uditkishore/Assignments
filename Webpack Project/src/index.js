import React from "react";
import ReactDOM from "react-dom";

import("./index.css");

ReactDOM.render(
  <div className="smallDiv">
    <div className="heading">
      <img src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png" />
      <h1>WEBPACK TODO</h1>
    </div>
    <div className="searchArea">
      <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
      <button id="button"> Submit</button>
    </div>
    <div className="listbox">
      <ol></ol>
    </div>
  </div>,
  document.getElementById("container")
);

document.getElementById("button").addEventListener("click", () => {
  let val = document.querySelector("textarea").value;
  let ol = document.querySelector("ol");
  let li = document.createElement("li");
  li.textContent = val;
  ol.append(li);
});



export {
  
  state
  ret{
  
 }
}