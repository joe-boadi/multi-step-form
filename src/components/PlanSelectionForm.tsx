import styles from "../assets/styles/PlanSelectionForm.module.css";

type SelectPlan = {
  name: string;
  term: string;
  rate: number;
  term_: string;
  onClick: () => void;
};

export const SelectedPlan = ({name, term, rate, term_, onClick}:SelectPlan) => {
    return (
      <section className={styles.section}>
        <aside className={styles.leftside}>
          <h3 className={styles.plancheck}>
            {name} ({term})
          </h3>
          <h3 className={styles.change} onClick={onClick}>
            Change
          </h3>
        </aside>
        <aside className={styles.rightside}>
          <h3>
            ${rate}/{term_}
          </h3>
        </aside>
      </section>
    );
  }