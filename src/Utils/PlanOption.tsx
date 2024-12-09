import { PlanOption} from "../Data/DataLogic";
import { usePersistedState } from "../hooks/usePersistance";
import { Plan } from "../Utils/Plan";
import { Toggle } from "../Helpers/Toggle";
import "../App.css";

const PlanOptions = () => {
  // eslint-disable-next-line prefer-const
  let [selectedPlan, setSelectedPlan] = usePersistedState("selectedPlan", -1);
  const [plan, setplan] = usePersistedState("plan", false);
  const [borderColor, setborderColor] = usePersistedState(
    "borderColor",
    "rgba(214, 217, 230, 1)"
  );

  return (
    <div className="slide-in">
      <div className="planOptions">
        {PlanOption().map((dt, index) => {
          return (
            <Plan
              handleClick={() => {
                selectedPlan = index;
                setSelectedPlan(selectedPlan);

                if (index === selectedPlan) {
                  setborderColor("rgba(72, 62, 255, 1)");
                }
              }}
              isBenefit={plan}
              benefit={dt.benefit}
              borderColor={`${index === selectedPlan
                ? borderColor
                : "rgba(214, 217, 230, 1)"}`}
              icon={dt.icon}
              planPrice={plan ? dt.yearplan : dt.monthplan}
              title={dt.title}
              key={index}
            />
          );
        })}
      </div>

      <Toggle
        checked={plan}
        monthColor={plan ? " rgba(2, 41, 89, 1)" : "rgba(150, 153, 170, 1)"}
        yearColor={plan ? " rgba(150, 153, 170, 1)" : "rgba(2, 41, 89, 1)"}
        handleClick={() => {
          setplan(!plan);
        }}
      />
    </div>
  );
}

export default PlanOptions;