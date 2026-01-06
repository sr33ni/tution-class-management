import React from "react";
import { Route , NavLink } from "react-router-dom";
type ContentProps = {
  opensidebar: {
    sidebarhide: string;
  };

};

const Sidebar = ({opensidebar} : ContentProps) => {
    return(
          <div
            className={`offcanvas-lg offcanvas-start col-lg-2 bg-body border-end min-vh-100 p-3 ${opensidebar.sidebarhide}`}
            id="sidebar"
          >
            <h5 className="fw-bold mb-4">
              <img src="/image/image.jpeg" alt="logo" />
            </h5>
              
            <nav aria-label="Main navigation menu">
              <ul className="nav nav-pills flex-column gap-2">
                <li><NavLink className="text-decoration-none nav-link" to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink className="text-decoration-none nav-link" to="/dashboard/teachers">Teachers</NavLink></li>
                
              </ul>
            </nav>
          </div>
    )
}
export default Sidebar;