import { FiSearch, FiSun, FiMoon, FiUser } from "react-icons/fi";
import { MdFastfood } from "react-icons/md";

function Navbar({ theme, setTheme, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <MdFastfood className="logo-icon" />
        <span>Food</span> App
      </div>

      <div className="search-box">
        <FiSearch className="search-icon" />
        <input
          type="text"
          placeholder="Rechercher un plat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />      </div>

      <div className="nav-actions">
        <button
          className={theme === "light" ? "theme-btn active-theme" : "theme-btn"}
          onClick={() => setTheme("light")}
        >
          <FiSun />
        </button>
        <button
          className={theme === "dark" ? "theme-btn active-theme" : "theme-btn"}
          onClick={() => setTheme("dark")}
        >
          <FiMoon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;