// src/Kanbas/Navigation.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaUserCircle, FaCog } from "react-icons/fa";
import "../styles.css";

export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Courses", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: FaCog },
  ];

  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a className="list-group-item bg-black text-white border-0 text-center" id="wd-neu-link" href="https://www.northeastern.edu/">
        <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
      </a>
      <a className="list-group-item bg-black text-white border-0 text-center" id="wd-account-link" href="#/Kanbas/Account">
        <FaUserCircle className="fs-1 text text-white" />
        Account
      </a>
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`list-group-item text-center border-0 ${pathname.includes(link.path) ? "bg-white text-danger" : "bg-black text-white"}`}
        >
          <link.icon className={`fs-1 ${pathname.includes(link.path) ? "text-danger" : "text-danger"}`} /><br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
