import { AddOnProps } from './types';
import styles from "./Addons.module.css";

export const AddOnItem = ({ addon, isSelected, billing, onSelect }: AddOnProps) => {
    return (
        <div
            className={`${styles.addon} ${isSelected ? styles.selected : ''}`}
            onClick={() => onSelect(addon.title)}
        >
            <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onSelect(addon.title)}
            />
            <div>
                <h4>{addon.title}</h4>
                <p>{addon.desc}</p>
            </div>
            <p className={styles.price}>
                +${addon.price[billing]}/{billing === "Monthly" ? "mo" : "yr"}
            </p>
        </div>
    );
};