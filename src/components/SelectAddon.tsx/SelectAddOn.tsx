import styles from "../../assets/styles/SelectAddOns.module.css";

interface SelectAddOns {
  title: string;
  price: number;
  term: string;
}

const AddOnForms = ( { title, price, term } :SelectAddOns ) => {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>
        {title}
      </h4>
      <h5 className={styles.price}>
        +${price}/{term}
      </h5>
    </section>
  );
};

export default AddOnForms;