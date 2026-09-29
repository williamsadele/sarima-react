import { useState } from "react";
import { Link } from "react-router-dom";
import { Telescope, MessageCircleMore, Bell, UserRound, Search } from "lucide-react";
 
// variant="home" -> full nav. variant="explore" -> nav with search bar.
export default function Navbar({ variant = "home", search = "", onSearch }) {
  const [open, setOpen] = useState(false);
  const hamburger = (
    <button className={`hamburger ${open ? "open" : ""}`} aria-label="Menu" onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
    </button>
  );
 
  if (variant === "explore") {
    return (
      <nav className={`nav-bar ${open ? "open" : ""}`}>
        <Link className="logo" to="/">Sarima</Link>
        <div className="nav-center"></div>
        <div className="nav-right">
          <div className="search-bar">
            <input
              type="text"
              placeholder="What's your design need?"
              value={search}
              onChange={(e) => onSearch?.(e.target.value)}
            />
            <a href="#"><Search /></a>
          </div>
          <a href="#"><MessageCircleMore /></a>
          <a href="#"><UserRound /></a>
          {hamburger}
        </div>
      </nav>
    );
  }
 
  return (
    <div className={`navbar ${open ? "open" : ""}`}>
      <Link className="logo" to="/">Sarima</Link>
      <div className="nav-center">
        <div className="nav-left">
          <Link to="/explore">Explore<Telescope /></Link>
        </div>
        <div className="nav-right">
          <Link to="/about" className="startpro">Learn about us</Link>
          <a href="#"><MessageCircleMore /></a>
          <a href="#"><Bell /></a>
          <a href="#"><UserRound /></a>
        </div>
      </div>
      {hamburger}
    </div>
  );
}
 