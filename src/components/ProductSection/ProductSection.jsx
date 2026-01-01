const products = [
  "Plastic & Polyester Buttons",
  "Metal & Fancy Metal Buttons",
  "Jeans & Coat Buttons",
  "Snap Fasteners & Rivets",
  "Wooden & Designer Buttons",
  "Belt Buckles & Eyelets",
  "Metal & Plastic Zippers",
  "Custom Button Solutions",
];

const ProductSection = () => {
  return (
    <section className="fade-in">
      <h2>Our Product Range</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={{ fontSize: "18px" }}>{item}</h3>
            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              Premium quality manufacturing with reliable supply.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
