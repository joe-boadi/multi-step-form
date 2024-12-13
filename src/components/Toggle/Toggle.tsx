import { ChangeEvent } from "react";
import { ToggleProps } from "./types";
import { parseToggleOptions } from "./utils";
import styles from "../../assets/styles/Plan.module.css";
import { FormData } from "../../type";

const Toggle = ({ name, options, data, setData }: ToggleProps) => {
    const { labels, values } = parseToggleOptions(options);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        const newValue = values[checked ? 1 : 0];
        setData((previousState: FormData) => ({
            ...previousState,
            [name]: newValue
        }));
    };

    const currentValue = data[name];
    return (
        <aside className={styles.toggle}>
            <h5 className={currentValue === values[0] ? styles.active : ""}>
                {labels[0]}
            </h5>
            <input
                className={``}
                type="checkbox" 
                id={`${name}`}
                checked={currentValue === values[1]} 
                onChange={handleChange} 
            />
            <label tabIndex={0}></label>
            <h5 className={currentValue === values[1] ? styles.active : ""}>
                {labels[1]}
            </h5>
        </aside>
    );
};
export default Toggle;