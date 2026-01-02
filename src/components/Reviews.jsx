import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sk_reviews")) || [];
    setReviews(stored);
  }, []);

  const submitReview = (e) => {
    e.preventDefault();

    if (!name || !comment) {
      alert("Please fill all fields");
      return;
    }

    const newReview = {
      name,
      comment,
      rating,
      date: new Date().toLocaleDateString(),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("sk_reviews", JSON.stringify(updated));

    setName("");
    setComment("");
    setRating(5);
    setShowForm(false);
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Customer Reviews</h2>
      <p style={styles.subtitle}>
        What our customers say about SK Buttons
      </p>

      {/* REVIEWS LIST */}
      <div style={styles.grid}>
        {reviews.length === 0 && (
          <p style={styles.empty}>No reviews yet. Be the first!</p>
        )}

        {reviews.map((r, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardHeader}>
              <strong>{r.name}</strong>
              <span style={styles.date}>{r.date}</span>
            </div>

            <div style={styles.stars}>
              {"★".repeat(r.rating)}
              {"☆".repeat(5 - r.rating)}
            </div>

            <p style={styles.comment}>{r.comment}</p>
          </div>
        ))}
      </div>

      {/* WRITE REVIEW BUTTON */}
      <div style={styles.buttonWrap}>
        <button
          style={styles.openBtn}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Write a Review"}
        </button>
      </div>

      {/* REVIEW FORM */}
      {showForm && (
        <form onSubmit={submitReview} style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <textarea
            placeholder="Write your review"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={styles.textarea}
          />

          <div style={styles.ratingRow}>
            <span>Rating:</span>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  ...styles.star,
                  color: star <= rating ? "#f5a623" : "#ccc",
                }}
              >
                ★
              </span>
            ))}
          </div>

          <button type="submit" style={styles.submitBtn}>
            Submit Review
          </button>
        </form>
      )}
    </section>
  );
};

export default Reviews;

/* ================= STYLES ================= */

const styles = {
  section: {
    background: "#f8f9fb",
    padding: "90px 16px",
  },

  title: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "8px",
  },

  subtitle: {
    textAlign: "center",
    color: "#666",
    marginBottom: "45px",
  },

  empty: {
    textAlign: "center",
    color: "#777",
  },

  grid: {
    maxWidth: "1100px",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },

  card: {
    background: "#fff",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
  },

  date: {
    fontSize: "12px",
    color: "#888",
  },

  stars: {
    color: "#f5a623",
    marginBottom: "10px",
  },

  comment: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.6",
  },

  buttonWrap: {
    textAlign: "center",
    marginTop: "40px",
  },

  openBtn: {
    padding: "12px 28px",
    borderRadius: "999px",
    border: "none",
    background: "#111",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },

  form: {
    maxWidth: "520px",
    margin: "50px auto 0",
    background: "#fff",
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },

  textarea: {
    width: "100%",
    padding: "12px 14px",
    height: "90px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    resize: "none",
  },

  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "16px 0",
  },

  star: {
    fontSize: "22px",
    cursor: "pointer",
  },

  submitBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: "999px",
    border: "none",
    background: "#111",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
};
