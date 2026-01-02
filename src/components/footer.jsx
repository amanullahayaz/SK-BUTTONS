const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.footerGrid}>

        {/* ABOUT */}
        <div>
          <h3 style={styles.footerHeading}>SK Buttons</h3>
          <p>
            Trusted manufacturer and supplier of premium buttons and garment
            accessories since 1985. Delivering quality, durability, and style
            across India and beyond.
          </p>
        </div>

        {/* CONTACT */}
        <div id="contact">
          <h3 style={styles.footerHeading}>Contact Us</h3>
          <p>
            📍 Ground Floor, Radhika Complex,<br />
            1623/13, Main Road, Govindpuri,<br />
            Kalkaji, New Delhi – 110019
          </p>
          <p><b>✉️ skbuttons1977@gmail.com</b></p>
          <p>📞 +91 9911146602 / 9810948641</p>

          <a
            href="https://wa.me/919911146602?text=Hello%20SK%20Buttons,%20I%20am%20interested%20in%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsapp}
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* BUSINESS INFO */}
        <div>
          <h3 style={styles.footerHeading}>Business Info</h3>
          <p>✔ Manufacturing & Wholesale</p>
          <p>✔ Customized Orders Accepted</p>
          <p>✔ Bulk Supply Available</p>

          <p style={{ marginTop: "14px" }}>
            🔗{" "}
            <a
              href="https://www.indiamart.com/skbuttons/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.indiaMartLink}
            >
              Visit our IndiaMART Profile
            </a>
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div style={styles.copyright}>
        © {new Date().getFullYear()} SK Buttons. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

/* ================= STYLES ================= */

const styles = {
  footer: {
    background: "#000",
    color: "#bbb",
    padding: "70px 0 25px",
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },

  footerHeading: {
    color: "#fff",
    marginBottom: "12px",
  },

  whatsapp: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "14px",
    padding: "10px 18px",
    background: "#25D366",
    color: "#fff",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
  },

  indiaMartLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
  },

  copyright: {
    textAlign: "center",
    marginTop: "40px",
    color: "#777",
    fontSize: "14px",
  },
};
