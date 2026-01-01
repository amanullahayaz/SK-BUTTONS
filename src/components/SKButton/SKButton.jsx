import styles from "./SKButton.module.css";

const SKButton = ({ text, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      <span>{text}</span>
    </button>
  );
};

export default SKButton;
