import styles from "../assets/styles/Plan.module.css";

type PlanProps = {
  icon: string;
  title: string;
  planPrice: string;
  handleClick: () => void;
  borderColor: string;
  isBenefit: boolean;
  benefit: string;
};

export const Plan = ( 
    { icon, title, planPrice, 
        handleClick, borderColor, 
        isBenefit, benefit} :PlanProps ) => {

    return (
      <div>
        <section
          className={styles.section}
          onClick={handleClick}
          style={{ border: `1px solid ${borderColor}` }}
        >
          <img
            className={styles.icon}
            src={icon}
            alt={title}
          />

          <div className={styles.textsection}>
            <h2 className={styles.title}>
              {title}
            </h2>
            <h3 className={styles.planprice}>
              +${planPrice}
            </h3>
            <p>
              {isBenefit && benefit}
            </p>
          </div>
        </section>
      </div>
    );
  }