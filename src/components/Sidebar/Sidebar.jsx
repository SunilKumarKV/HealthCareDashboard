import { useState } from "react";
import {
  FaTachometerAlt,
  FaHistory,
  FaCalendarAlt,
  FaUserMd,
  FaChartBar,
  FaVial,
  FaCommentDots,
  FaPhone,
  FaCog,
} from "react-icons/fa"; // imported icons from font Aswom
import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);
  return (
    <>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <aside className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
        <div className="logo">
          Health<span>care.</span>
        </div>

        <div className="sidebar-section">
          <p className="section-title">General</p>
          <ul>
            <li>
              <FaTachometerAlt className="active" /> Dashboard
            </li>
            <li>
              <FaHistory className="icon" /> History
            </li>
            <li>
              <FaCalendarAlt className="icon" /> Calendar
            </li>
            <li>
              <FaUserMd className="icon" /> Appointments
            </li>
            <li>
              <FaChartBar className="icon" /> Statistics
            </li>
            <li>
              <FaVial className="icon" /> Tests
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <p className="section-title">Tools</p>
          <ul>
            <li>
              <FaCommentDots className="icon" /> Chat
            </li>
            <li>
              <FaPhone className="icon" /> Support
            </li>
          </ul>
        </div>

        <div className="sidebar-footer">
          <ul>
            <li>
              <FaCog className="icon" /> Setting
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
