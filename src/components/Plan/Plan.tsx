import { ComponentPropsType } from "../../type";
import Toggle from "../Toggle/Toggle";
import styles from "../../assets/styles/Plan.module.css";

const Plan = ({ data, setData }: ComponentPropsType) => {
    return (
        <div className={styles.planContainer}>
            {/* Your existing Plan component content */}
            <Toggle
                options={["Monthly", "Yearly"] as const}
                name="billing"
                data={data}
                setData={setData}
            />
        </div>
    );
};

export default Plan;