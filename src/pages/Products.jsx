import Header from "../components/Header";
import Footer from "../components/footer";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";
import p8 from "../assets/images/p8.jpg";
import p9 from "../assets/images/p9.jpg";
import p10 from "../assets/images/p10.jpg";
import p11 from "../assets/images/p11.jpg";

const products = [
  { img: p1, name: "Metal Buttons" },
  { img: p2, name: "Plastic Buttons" },
  { img: p3, name: "Jeans Buttons" },
  { img: p4, name: "Fancy Buttons" },
  { img: p5, name: "Wooden Buttons" },
  { img: p6, name: "Snap Buttons" },
  { img: p7, name: "Coat Buttons" },
  { img: p8, name: "Kurta Buttons" },
  { img: p9, name: "Metal Zippers" },
  { img: p10, name: "Garment Accessories" },
  { img: p11, name: "Designer Buttons" },
];

const dealItems = [
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
];

const Products = () => {
  return (
    <>
      <Header />

      {/* WHAT WE DEAL IN */}
      <section style={styles.dealSection}>
        <div className="container">
          <h2 style={styles.sectionTitle}>What We Deal In?</h2>
          <p style={styles.subText}>
            Complete range of buttons and garment accessories
          </p>

          <div style={styles.dealGrid}>
            {dealItems.map((item, i) => (
              <div key={i} style={styles.dealCard}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section style={styles.wrapper}>
        <h2 style={styles.sectionTitle}>Our Product Catalogue</h2>
        <p style={styles.subtitle}>
          Premium quality buttons & garment accessories crafted with precision
        </p>

        <div style={styles.grid}>
          {products.map((p, i) => (
            <div
              key={i}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 60px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0,0,0,0.1)";
              }}
            >
              <img src={p.img} alt={p.name} style={styles.image} />
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
          <Footer/>
    </>
  );
};

export default Products;

/* ===================== STYLES ===================== */

const styles = {
  /* ===== SECTION ===== */
  dealSection: {
    background: "linear-gradient(180deg, #f7f8fa, #ffffff)",
    padding: "64px 16px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "clamp(22px, 6vw, 36px)",
    fontWeight: "700",
    marginBottom: "10px",
  },

  subText: {
    textAlign: "center",
    color: "#666",
    marginBottom: "36px",
    fontSize: "14.5px",
  },

  /* ===== WHAT WE DEAL GRID ===== */
  dealGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "16px",
  },

  dealCard: {
    background: "#fff",
    padding: "16px",
    borderRadius: "14px",
    textAlign: "center",
    fontWeight: "500",
    fontSize: "13.5px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
  },

  /* ===== PRODUCT SECTION ===== */
  wrapper: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "72px 16px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "40px",
    fontSize: "14.5px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "200px", // 🔑 MOBILE OPTIMIZED
    objectFit: "cover",
  },

  cardBody: {
    padding: "16px",
    textAlign: "center",
  },

  cardTitle: {
    fontSize: "15.5px",
    fontWeight: "600",
  },

  /* ===== FOOTER ===== */
  copyright: {
    textAlign: "center",
    background: "#000",
    padding: "18px 10px",
    color: "#999",
    fontSize: "13.5px",
  },
};
