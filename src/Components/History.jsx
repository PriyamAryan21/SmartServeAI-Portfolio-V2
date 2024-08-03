import React from "react";
import Search from "./Search";
import './History.css'

export default function History() {
  return (
    <div className="historyContainer">
      <div className="headerContainer">
        <div className="historyHeader">
          <h1>History</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            enim, vitae animi deleniti, nisi distinctio repudiandae, doloribus
            nemo maxime id blanditiis est minus fugit provident.
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
}
