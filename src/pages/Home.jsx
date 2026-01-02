import Header from "../components/Header";
import SKButton from "../components/SKButton/SKButton";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero-bg.png";
import Reviews from "../components/Reviews";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* HERO (FULL WIDTH) */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>SK Buttons</h1>
        <p style={styles.heroText}>
          Crafting Quality Since 1985 <br />
          Buttoning the world with quality and tradition
        </p>

        <SKButton
          text="Explore Our Products"
          onClick={() => navigate("/products")}
        />
      </section>

      {/* ABOUT */}
      <section>
        <div className="container">
          <h2>About SK Buttons</h2>
          <p>
            Founded in 1985, <strong>SK Buttons</strong> is a trusted name in the
            button manufacturing industry, delivering premium button solutions
            to garment, apparel, and accessory makers across India and beyond.
          </p>
          <p>
            With decades of expertise and a deep commitment to quality, we
            specialize in producing an extensive range of high-performance
            buttons that blend functionality, durability, and style.
          </p>
          <p>
            Under the leadership of <strong>Mr. Ganesh Mishra</strong>, the
            company has grown from a humble workshop into a renowned
            manufacturer. Today, the legacy continues with{" "}
            <strong>Mr. Vicky Mishra</strong>, bringing innovation to our
            time-tested craftsmanship.
          </p>
        </div>
      </section>

      {/* PRODUCT RANGE */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <h2>Our Product Range</h2>
          <ul>
            <li>Plastic & Polyester Buttons</li>
            <li>Metal Buttons & Fancy Metal Buttons</li>
            <li>Wooden & Specialty Designer Buttons</li>
            <li>Snap Buttons, Jeans Buttons & Coat Buttons</li>
            <li>Customized Button Solutions</li>
          </ul>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <div className="container">
          <h2>Why Choose SK Buttons?</h2>
          <ul>
            <li>40+ years of manufacturing experience</li>
            <li>Strict quality control & premium materials</li>
            <li>Extensive range of designs and finishes</li>
            <li>Customized solutions for clients</li>
            <li>Trusted leadership & industry knowledge</li>
          </ul>
        </div>
      </section>

      {/* WHAT WE DEAL IN */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <h2 style={{ textAlign: "center" }}>What We Deal In?</h2>
          <p style={styles.subText}>
            Complete range of buttons and garment accessories
          </p>

          <div style={styles.dealGrid}>
            {[
              "Metal Belt Buckles","Shirt Button","Metal Zippers","Polyester Button",
              "Buttons","Jeans Buttons","Fancy Kurti","Garment Buttons","Wooden Buttons",
              "Belt Buckles","Brass Eyelets","Coat Button","Rivet Buttons",
              "Plastic Snap Button","Fancy Metal Button","Brass Buttons","Kurta Buttons",
              "Plastic Button","Buckles","Brass Belt Buckle","Colored Zippers",
              "Coat Brooch","Garment Ring Adjuster","Shell Button","Zinc Belt Buckle",
              "Horn Buttons","Metal Eyelet","Fabric Button","Plastic Zippers",
              "Metal Buttons","Coconut Button","Round Button","Round Metal Button",
              "Pearl Button","Hook Eye Fastener","Garment Eyelet","Chalk Button",
              "Laser Button","ABS Button","Metal Patches","Zinc Button",
              "Imitation Horn Button",
            ].map((item, i) => (
              <div key={i} style={styles.dealCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (FULL WIDTH) */}
      <section style={styles.cta}>
        <h2>Looking for Quality Button Solutions?</h2>
        <p style={{ color: "#bbb", margin: "20px 0 35px" }}>
          Partner with SK Buttons for reliable, durable & stylish products.
        </p>
        <SKButton
          text="View Product Catalog"
          onClick={() => navigate("/products")}
        />
      </section>
        <Reviews/>
 {/* FOOTER */}
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
          href="https://www.indiamart.com/skbuttons/?srsltid=AfmBOoq2yVWDwnSqj66OF6SQHz0hJRDRYBcT9lVbT5H_apVGNrcYlsIx"
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

    </>
  );
};

export default Home;

/* ================= INLINE STYLES (FINAL) ================= */

const styles = {
  /* ================= HERO ================= */
  hero: {
    minHeight: "85vh",
    background: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.8)), url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 16px",
  },

  heroTitle: {
    fontSize: "clamp(28px, 8vw, 52px)",
    fontWeight: "700",
    color: "#fff",
    marginBottom: "8px",
  },

  heroText: {
    fontSize: "clamp(14px, 4.5vw, 18px)",
    color: "#ddd",
    maxWidth: "720px",
    margin: "14px auto 26px",
    lineHeight: "1.6",
  },

  /* ================= WHAT WE DEAL IN ================= */
  subText: {
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
    fontSize: "16px",
  },

  dealGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },

  dealCard: {
    background: "#ffffff",
    padding: "18px 16px",
    borderRadius: "16px",
    textAlign: "center",
    fontSize: "14.5px",
    fontWeight: "500",
    color: "#222",
    boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
    cursor: "default",
  },

  /* ================= CTA ================= */
  cta: {
    background: "#f7f7f7",
    textAlign: "center",
    padding: "80px 16px",
  },

  /* ================= WHATSAPP ================= */
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
    transition: "0.3s ease",
  },

  /* ================= FOOTER ================= */
  footer: {
    background: "#0b0b0b",
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
    marginBottom: "14px",
    fontSize: "18px",
  },

  copyright: {
    textAlign: "center",
    marginTop: "40px",
    color: "#777",
    fontSize: "14px",
  },
};

