import React from "react";
import './Sidebar.css'


export default function Sidebar() {
  return (
    <>
      <div className="sidebar-header">
        <div className="Header-Rnp">
          <div className="logo">
            <span className="logo-text">#</span>
            <span className="logo-name">RnPsoft</span>
          </div>
        </div>
        <div className="menu sidebar">
          <div className="menu-item active">
            <i className="icon-ticket" />
            <span>Ticket</span>
          </div>
          <div className="menu-item">
            <i className="icon-members" />
            <span>Members</span>
          </div>
          <div className="menu-item">
            <i className="icon-history" />
            <span>History</span>
          </div>
        </div>
        <div className="settings sidebar">
          <div className="menu-item">
            <i className="icon-settings" />
            <span>Setting</span>
          </div>
          <div className="menu-item">
            <i className="icon-logout" />
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </>
  );
}
