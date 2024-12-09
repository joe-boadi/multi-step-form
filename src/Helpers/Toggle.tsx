import styles from "../assets/styles/Toggle.module.css";

type Toggle = {
  handleClick: () => void;
  yearColor: string;
  monthColor: string;
  checked: boolean;
};

export const Toggle = ( { checked, monthColor, yearColor, handleClick } : Toggle ) => {
    return (
      <section>
        <section className={styles.section}>
          <h3
            className={styles.planType}
            style={{ color: `${monthColor}` }}
          >
            Monthly
          </h3>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="mode"
              onClick={handleClick}
              checked={checked}
            />
            <span className={`${styles.slider} ${styles.round}`} />
          </label>
          <h3
            className={styles.planType}
            style={{ color: `${yearColor}` }}
          >
            Yearly
          </h3>
        </section>
      </section>
    );
  }