import styles from "../assets/styles/AddOnForm.module.css";

type AddOnProps = {
  name: string;
  description: string;
  plan: string;
};

export const AddOns = ( { name, description, plan }:AddOnProps ) => {
    return (
      <div>
        <section className={styles.section}>
          <div className={styles.leftside}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onChange={event => {
                console.log(event);
              }}
            />
            <div>
              <h3 className={styles.name}>
                {name}
              </h3>
              <h3 className={styles.description}>
                {description}
              </h3>
            </div>
          </div>
          <h3 className={styles.plan}>
            +${plan}
          </h3>
        </section>
      </div>
    );
  }