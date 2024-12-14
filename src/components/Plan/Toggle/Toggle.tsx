import { ChangeEvent } from "react";
import { ObjectType } from "../../../type";
import styles from "./../Plans.module.css";

type OptionType = string | { label: string; value: string };

export type ToggleProps = {
    options: [OptionType, OptionType];
    name: string;
    data: ObjectType;
    setData: React.Dispatch<React.SetStateAction<ObjectType>>;
};

const Toggle = ({ name, options, data, setData }: ToggleProps) => {
    const labels = options.map(element => (typeof element === 'string' ? element : element.label));
    const values = options.map(element => (typeof element === 'string' ? element : element.value));
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setData(previousState => ({ ...previousState, [name]: values[checked ? 1 : 0] }));
    };

    return (
        <aside className={styles.switch}>
            <h5 className={data[name] === values[0] ? `${styles.active}` : ""}>{labels[0]}</h5>
            <input 
                type="checkbox" 
                id={name} 
                checked={data[name] === values[1]} 
                onChange={handleChange} 
            />
            <label htmlFor={name} tabIndex={0}></label>
            <h5 className={data[name] === values[1] ? `${styles.active}` : ""}>{labels[1]}</h5>
        </aside>
    );
};

export default Toggle;