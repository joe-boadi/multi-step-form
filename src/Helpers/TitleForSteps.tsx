import styles from "../assets/styles/TitleForStep.module.css";
import "../App.css";

interface StepTitleProps {
  title: string;
  description: string;
}

export const TitleForStep = ( { title, description } :StepTitleProps) => {
    return (
      <aside className="slide-in">
        <section className={styles.section}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <p className={styles.description}>
            {description}
          </p>
        </section>
      </aside>
    );
  }