import styles from "./plan.module.css";
interface PlanOption {
  title: string;
  price: number;
  icon: string;
  benefit: string;
  borderColor: string;
  onSelect: () => void;
  // Add other props as needed for PlanOption interface, such as additional details or custom styling.
  // For example, add a prop "description" to display a brief description of the plan.
}
export const PlanCard = ({
  title,
  price,
  icon,
  benefit,
  borderColor,
  onSelect,
}: PlanOption) => {
  return (
    <div
      className={`${styles.plan} }`}
      onClick={onSelect}
      style={{
        borderColor: borderColor,
      }}
    >
      <img src={icon} alt={title} />
      <div className={styles.planInfo}>
        <h3>{title}</h3>
        <p className={styles.price}>${price}/mo</p>
        <p className={styles.yearlyBonus}>{benefit}</p>
      </div>
    </div>
  );
};