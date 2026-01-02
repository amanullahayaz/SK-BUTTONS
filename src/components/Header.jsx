import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* Detect resize */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Close menu on outside click */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  /* Scroll to contact */
  const handleContactClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LOGO */}
        <Link to="/" style={styles.logoWrap}>
          <img src={logo} alt="SK Buttons" style={styles.logo} />
          <span style={styles.brand}>SK Buttons</span>
        </Link>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav style={styles.desktopNav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About Us</Link>
            <Link to="/products" style={styles.link}>Products</Link>
            <a onClick={handleContactClick} style={styles.link}>Contact Us</a>
          </nav>
        )}

        {/* MOBILE NAV */}
        {isMobile && (
          <div ref={menuRef}>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={styles.hamburger}
            >
              <span style={{ ...styles.bar, transform: menuOpen ? "rotate(45deg) translateY(7px)" : "" }} />
              <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
              <span style={{ ...styles.bar, transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "" }} />
            </button>

            {menuOpen && (
              <nav style={styles.mobileNav}>
                <Link to="/" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>About Us</Link>
                <Link to="/products" style={styles.mobileLink} onClick={() => setMenuOpen(false)}>Products</Link>
                <a onClick={handleContactClick} style={styles.mobileLink}>Contact Us</a>
              </nav>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

/* ================= STYLES ================= */

const styles = {
  header: {
    position: "sticky",
    top: 0,
    background: "rgba(255,255,255,0.96)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
    zIndex: 1000,
  },

  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },

  logo: {
    height: "40px",
  },

  brand: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.8px",
    color: "#111",
  },

  /* DESKTOP NAV */
  desktopNav: {
    display: "flex",
    gap: "28px",
    alignItems: "center",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
  },

  /* HAMBURGER */
  hamburger: {
    background: "none",
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    cursor: "pointer",
  },

  bar: {
    width: "26px",
    height: "2px",
    background: "#111",
    transition: "0.3s",
  },

  /* MOBILE MENU */
  mobileNav: {
    position: "absolute",
    right: "20px",
    top: "60px",
    background: "#fff",
    borderRadius: "14px",
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
    minWidth: "180px",
  },

  mobileLink: {
    fontSize: "15px",
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer",
  },
};
