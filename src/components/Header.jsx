import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 350);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
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

        {/* NAV */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>

          {/* CONTACT */}
          <a
            href="#contact"
            onClick={handleContactClick}
            style={{ ...styles.link, ...styles.contactBtn }}
          >
            Contact
          </a>
        </nav>
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
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    zIndex: 1000,
  },

  container: {
    maxWidth: "1280px",
    margin: "auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textDecoration: "none",
  },

  logo: {
    height: "42px",
  },

  brand: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.3px",
    color: "#111",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
  },

  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "15px",
    fontWeight: "500",
    padding: "8px 4px",
    transition: "all 0.25s ease",
  },

  contactBtn: {
    padding: "8px 18px",
    borderRadius: "999px",
    background: "#111",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
  },
};
