import styles from "./NavButtons.module.css";

type NavigatoinProps = {
  nextClick: () => void;
  prevClick: () => void;
};

const NavButton = ({nextClick, prevClick}:NavigatoinProps) => {
    return (
      <div className={styles.btn}>
        <button className={styles.prevbtn} onClick={prevClick}>
          {" "}Go Back
        </button>
        <button onClick={nextClick} className={styles.nextbtn}>
          {" "}Next Step
        </button>
      </div>
    );
  }

export default NavButton;