import { PlanCardProps } from './types';
import styles from '../../assets/styles/Plan.module.css';

export const PlanCard = ({ plan, isSelected, billing, onSelect }: PlanCardProps) => {
    return (
        <div 
            className={`${styles.plan} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(plan.id)}
        >
            <img src={plan.icon} alt={plan.title} />
            <div className={styles.planInfo}>
                <h3>{plan.title}</h3>
                <p className={styles.price}>
                    ${plan.price[billing]}/{billing === "Monthly" ? "mo" : "yr"}
                </p>
                {billing === "Yearly" && (
                    <p className={styles.yearlyBonus}>2 months free</p>
                )}
            </div>
        </div>
    );
};