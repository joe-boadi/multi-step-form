import styles from "../assets/styles/FormStep.module.css";

type FormStep = {
  id: number;
  formTitle: string;
  id_color: string;
  id_backGround_color: string;
  borderColor: string;
};

export const FormStep =( { id, formTitle, id_color, id_backGround_color, borderColor } :FormStep) => {
    return (
      <div>
        <section className={styles.section}>
          <div
            className={styles.circle}
            style={{
              background: `${id_backGround_color}`,
              border: `1px solid ${borderColor}`
            }}
          >
            <h1
              className={styles.id}
              style={{ color: `${id_color}` }}
            >
              {id}
            </h1>
          </div>
          <div className={styles.formdetails}>
            <h2 className={styles.stepid}>
              step {id}
            </h2>
            <h1 className={styles.formtitle}>
              {formTitle}
            </h1>
          </div>
        </section>
      </div>
    );
  }