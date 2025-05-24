import { FaSearch, FaBell, FaPlus } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/*  Header left component */}
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          readOnly
        />
        <FaBell className="bell-icon" />
      </div>

      {/*  Header left component */}
      <div className="header-right">
        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="user avatar"
            className="avatar"
          />
          <span className="username">Sunil</span>
        </div>
        <button className="add-btn">
          <FaPlus />
        </button>
      </div>
    </header>
  );
}
