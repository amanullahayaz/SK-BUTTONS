import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />


      {/* WHO WE ARE */}
      <section>
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Founded in <strong>1985</strong>, <strong>SK Buttons</strong> is a
            trusted manufacturer and supplier of premium buttons and garment
            accessories. With decades of industry experience, we have built a
            strong reputation for delivering quality, durability, and timeless
            design.
          </p>
          <p>
            From garment manufacturers to fashion designers, our products are
            widely used across India and beyond, serving both bulk buyers and
            customized requirements.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section style={styles.altSection}>
        <div className="container">
          <h2>Our Vision</h2>
          <p>
            To become a globally recognized name in the button and garment
            accessories industry by consistently delivering innovative,
            high-quality, and reliable products while maintaining ethical and
            sustainable business practices.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section>
        <div className="container">
          <h2>Our Mission</h2>
          <ul>
            <li>To manufacture premium-quality buttons and accessories</li>
            <li>To continuously innovate in designs and materials</li>
            <li>To deliver consistent quality at competitive prices</li>
            <li>To build long-term relationships with clients</li>
            <li>To support fashion and garment industries with reliability</li>
          </ul>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={styles.altSection}>
        <div className="container">
          <h2>Our Core Values</h2>
          <ul>
            <li>
              <strong>Quality First</strong> – No compromise on raw materials or
              finishing
            </li>
            <li>
              <strong>Integrity</strong> – Honest, transparent, and ethical
              business practices
            </li>
            <li>
              <strong>Innovation</strong> – Evolving with fashion trends and
              technology
            </li>
            <li>
              <strong>Customer Commitment</strong> – Satisfaction beyond sales
            </li>
          </ul>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section>
        <div className="container">
          <h2>Our Leadership</h2>
          <p>
            <strong>SK Buttons</strong> was founded under the guidance of{" "}
            <strong>Mr. Ganesh Mishra</strong>, whose dedication, craftsmanship,
            and industry knowledge laid the foundation for the company’s
            long-standing success.
          </p>
          <p>
            Today, the legacy continues under{" "}
            <strong>Mr. Vicky Mishra</strong>, who brings modern ideas,
            innovation, and a forward-looking vision while preserving the
            company’s core values and traditions.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={styles.altSection}>
        <div className="container">
          <h2>Why Choose SK Buttons</h2>
          <ul>
            <li>40+ years of manufacturing experience</li>
            <li>Strict quality control and premium materials</li>
            <li>Wide range of buttons and garment accessories</li>
            <li>Customized and bulk order capability</li>
            <li>Trusted by manufacturers across India</li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerGrid}>
          <div>
            <h3 style={styles.footerHeading}>SK Buttons</h3>
            <p>
              Trusted manufacturer and supplier of premium buttons and garment
              accessories since 1985.
            </p>
          </div>

          <div>
            <h3 style={styles.footerHeading}>Contact</h3>
            <p>📍 Govindpuri, New Delhi – 110019</p>
            <p>✉️ skbuttons1977@gmail.com</p>
            <p>📞 +91 9811146602 / 9810948641</p>
          </div>

          <div>
            <h3 style={styles.footerHeading}>Business</h3>
            <p>✔ Manufacturing & Wholesale</p>
            <p>✔ Customized Orders</p>
            <p>✔ Bulk Supply</p>
          </div>
        </div>

        <div style={styles.copyright}>
          © {new Date().getFullYear()} SK Buttons. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default About;

/* ================= STYLES ================= */

const styles = {
  hero: {
    minHeight: "55vh",
    background: "linear-gradient(135deg, #111, #000)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 16px",
  },

  heroTitle: {
    fontSize: "clamp(30px, 7vw, 48px)",
    fontWeight: "700",
  },

  heroText: {
    marginTop: "12px",
    color: "#ccc",
    fontSize: "clamp(14px, 4vw, 18px)",
  },

  altSection: {
    background: "#fff",
  },

  footer: {
    background: "#000",
    color: "#bbb",
    padding: "60px 0 25px",
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "28px",
  },

  footerHeading: {
    color: "#fff",
    marginBottom: "10px",
  },

  copyright: {
    textAlign: "center",
    marginTop: "30px",
    color: "#777",
    fontSize: "14px",
  },
};
