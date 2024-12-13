import { ComponentPropsType } from "../../type";
import Toggle from "../Toggle/Toggle";
import styles from "../../assets/styles/Plan.module.css";
import { PlanCard } from "./PlanCard";
import { PlanData } from "./data";
import { useState } from "react";

const Plan = ({ data, setData }: ComponentPropsType) => {
  const Data = PlanData();

  // const selectedPlan: PlanOption | undefined = data.plans.find((plan: PlanOption) => plan.id === data.selectedPlan);

  // eslint-disable-next-line prefer-const
  let [selectedPlan, setSelectedPlan] = useState(-1);
  const [border, setBorder] = useState("");

  const handleSelect = (index: number, plan: string, price: string) => {
    selectedPlan = index;

    setSelectedPlan(selectedPlan);
    if (selectedPlan === index) {
      setBorder("blue");
    }

    localStorage.setItem("planTitle", plan);
    localStorage.setItem("price", price);
  };

  return (
    <div className={styles.planPage}>
      <div className={styles.planContainer}>
        {Data.map((plan, index) => (
          <PlanCard
            benefit={plan.benefit}
            borderColor={`${index === selectedPlan ? border : ""}`}
            icon={plan.icon}
            price={plan.price.Monthly}
            title={plan.title}
            key={plan.id}
            onSelect={() =>
              handleSelect(index, plan.title, plan.price.Monthly.toString())
            }
          />
        ))}

      </div>
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
