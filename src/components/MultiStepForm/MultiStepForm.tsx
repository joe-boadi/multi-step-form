import { useState } from "react";
import { MultiStepFormPropsType } from "./types";
import useValidation from "../../hooks/useValidation";
import styles from "./MultiStepForm.module.css";

const MultiStepForm = (props: MultiStepFormPropsType) => {
	const { steps, handleSubmit, initialValue, SuccessPage } = props;
	const [currentStep, setCurrentStep] = useState(0);
	const [multiStepFormData, setMultiFormData] = useState(initialValue || {});
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleNextPrev = (value: -1 | 1) => {
		setCurrentStep(previouState => previouState + value);
		reset();
	};

	const onSubmit = () => {
		setHasSubmitted(true);
		handleSubmit?.(multiStepFormData);
		setMultiFormData(initialValue);
		reset();
	};

	const Component = steps[currentStep].Component;
	const isLastStep = currentStep === steps.length - 1;
	const isFirstStep = currentStep === 0;
	const submitFn = isLastStep ? onSubmit : () => handleNextPrev(1);
	const errFn = () => setCurrentStep(0);

	const { errors, onSubmit: _onSubmit, reset } = useValidation(multiStepFormData, submitFn, errFn);

	const stepsElement = steps.map((step, i) => {
		const isActive = currentStep === i;
		const className = isActive ? `${styles.step} ${styles.active}` : `${styles.step}`;
		return (
			<div className={className} key={i} onClick={() => setCurrentStep(i)}>
				<div className={styles.index}>{i + 1}</div>
				<div className={styles.title}>
					<p>STEP {i + 1}</p>
					<h3>{step.title}</h3>
				</div>
			</div>
		);
	});

	return (
		<div className={styles.multiStepForm}>
			<aside className={`${styles.steps} ${styles.custom__scrollbar}`}>{stepsElement}</aside>
			<div className={styles.content}>
				{hasSubmitted ? (
					<div className={`${styles.step__component} ${styles.custom__scrollbar}`}>
						<SuccessPage
							setData={setMultiFormData}
							data={multiStepFormData}
							errors={errors}
							currentStep={currentStep}
							setCurrentStep={setCurrentStep}
						/>
					</div>
				) : (
					<>
						<div className={`${styles.step__component} ${styles.custom__scrollbar}`}>
							<Component
								setData={setMultiFormData}
								data={multiStepFormData}
								errors={errors}
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
							/>
						</div>
						<div className={styles.btns}>
							{isFirstStep || (
								<button className={styles.goBack} onClick={() => handleNextPrev(-1)}>
									Go Back
								</button>
							)}
							<button className={isLastStep ? `${styles.submit}` : `${styles.next}`} onClick={_onSubmit}>
								{isLastStep ? "Confirm" : "Next Step"}
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
export default MultiStepForm;