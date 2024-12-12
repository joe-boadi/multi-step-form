import MultiStepForm from "../src/components/MultiStepForm/MultiStepForm";
import { steps, SuccessPage } from "./steps";
// import { ObjectType } from "./type";
import { FormData } from "./type";


const initialValue: FormData = {
    plan: "",
    billing: "Monthly",
    addons: [],
    name: "",
    email: "",
    phone: ""
};

function App() {
	const handleSubmit = (formData: FormData) => {
		console.log("Form submitted:", formData);
        // Handle form submission logic here
	};

	return (
		<main className="container">
			<h1 className="sr-only">Multi Step Form</h1>
			<MultiStepForm
				steps={steps}
				handleSubmit={handleSubmit}
				initialValue={initialValue}
				SuccessPage={SuccessPage}
			/>
		</main>
	);
}
export default App;