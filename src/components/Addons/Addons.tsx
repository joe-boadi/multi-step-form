import { ComponentPropsType } from "../../type";
import { addons } from "../../data";
import styles from "./Addons.module.css";
import { AddOnItem } from "./AddOnItem";

const AddOns = ({ data, setData }: ComponentPropsType) => {
    const handleAddonClick = (addonTitle: string) => {
        setData((prevState) => {
            const newAddons = prevState.addons.includes(addonTitle)
                ? prevState.addons.filter((existingAddon) => existingAddon !== addonTitle)
                : [...prevState.addons, addonTitle];

            return {
                ...prevState,
                addons: newAddons,
            };
        });
    };

    return (
        <form className={styles.form}>
            <h2>Pick add-ons</h2>
            <p>Add-ons help to enhance your gaming experience.</p>
            <div className={styles.addons}>
                {addons.map(addon => (
                    <AddOnItem
                        key={addon.title}
                        addon={addon}
                        isSelected={data.addons.includes(addon.title)}
                        billing={data.billing}
                        onSelect={handleAddonClick}
                    />
                ))}
            </div>
        </form>
    );
};

export default AddOns;