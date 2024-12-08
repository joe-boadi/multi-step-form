import SelectedAdon from "../components/SelectAddon.tsx/SelectAddOn";
import { SelectedPlan } from "../components/PlanSelectionForm";
import styles from "../assets/styles/FinishUp.module.css";

type FinishUpProps = {
  onClick: () => void;
};

export const FinishUp = ( { onClick}:FinishUpProps) => {
    return (
      <section className="slide-in">
        <div className={styles.section}>
          <main className={styles.main}>
            <aside>
              <SelectedPlan
                name="Arcade"
                term="Yearly"
                rate={90}
                term_="yr"
                onClick={onClick}
              />
            </aside>
            <div className={styles.line} />
            <SelectedAdon title={"Local Storage"} price={9} term={"yr"} />
          </main>
          <div className={styles.total} />
        </div>
      </section>
    );
  }