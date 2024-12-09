import styles from "../assets/styles/Button.module.css";

type Buttons = {
    onClick: () => void;
    backgroundColor: string;
    color: string;
    name: string;
}

const Button = ({onClick, backgroundColor, color, name}:Buttons) => {
  return (
    <button
        aria-label={name}
        onClick={onClick}
        className={styles.button}
        style={{
        background: `${backgroundColor}`,
        color: `${color}`
        }}
    >
        {name}
    </button>
      
  );
};

export default Button;
