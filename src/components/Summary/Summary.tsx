import { ComponentPropsType } from "../../type";
import { billingPlans, addons } from "../../data";
import { Billing, Plans } from "../MultiStepForm/types";
import styles from "../../assets/styles/Summary.module.css";

const Summary = (props: ComponentPropsType) => {
	const { data, setCurrentStep } = props;
	const { plan, billing } = data as { plan: Plans; billing: Billing };
	const price = billingPlans[billing][plan];
	const billingText = billing === "Monthly" ? "mo" : "yr";
	let totalPrice = price;

	const changePlan = () => setCurrentStep(1);

	const addonsElement = data.addons.map((addon: string) => {
		const _addon = addons.find(ele => ele.title === addon)!;
		const price = _addon.price[billing];
		totalPrice += price;
		return (
			<div className={styles.summary__detail} key={addon}>
				<p>{_addon.title}</p>
				<p className={styles.price}>
					+${price}/{billingText}
				</p>
			</div>
		);
	});

	return (
		<section className={styles.summary}>
			<h2>Finishing up</h2>
			<p>Double-check everything looks OK before confirming.</p>
			<div className={data.addons.length ? `${styles.summary__details} ${styles.summary__addons}` : `${styles.summary__details}`}>
				<div className={`${styles.summary__detail} ${styles.main}`}>
					<div className={styles.title}>
						<h3>
							{plan} ({billing})
						</h3>
						<button onClick={changePlan}>Change</button>
					</div>
					<p className={styles.price}>
						${price}/{billingText}
					</p>
				</div>
				{addonsElement}
			</div>
			<div className={styles.summary__total}>
				<p>Total (per {billing === "Monthly" ? "month" : "year"})</p>
				<p className={styles.price}>
					${totalPrice}/{billingText}
				</p>
			</div>
		</section>
	);
};

export default Summary;
