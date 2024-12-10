import { ComponentPropsType } from "../type";
import { addons } from "../data";
import styles from "../assets/styles/Addons.module.css"

const AddOns = (props: ComponentPropsType) => {
    const { data, setData } = props; 

    const handleAddonClick = (addonTitle: string) => {
        setData((prevState: { addons: string[]; billing: 'Monthly' | 'Yearly' }) => {
            if (prevState.addons.includes(addonTitle)) {
                return {
                    ...prevState,
                    addons: prevState.addons.filter((existingAddon) => existingAddon !== addonTitle)
                };
            } else {
                return {
                    ...prevState,
                    addons: [...prevState.addons, addonTitle]
                };
            }
        });
    };

    return (
        <form className={styles.form}>
            <h2>Pick add-ons</h2>
            <p>Add-ons help to enhance your gaming experience.</p>
            <div className={styles.addons}>
                {addons.map(addon => (
                    <div
                        className={ data.addons.includes(addon.title) ? `${styles.addon}` : `${styles.addon}`}
                        onClick={() => handleAddonClick(addon.title)}
                        key={addon.title}
                    >
                        <input
                            type="checkbox"
                            checked={data.addons.includes(addon.title)} 
                            onChange={() => handleAddonClick(addon.title)}
                        />
                        <div>
                            <h4>{addon.title}</h4>
                            <p>{addon.desc}</p>
                        </div>
                        <p className={styles.price}>
                            +${addon.price[data.billing as keyof typeof addon.price]}///+
                            {data.billing === "Monthly" ? "mo" : "yr"} 
                        </p>
                    </div>
                ))}
            </div>
        </form>
    );
};

export default AddOns;