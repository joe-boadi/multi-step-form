import MultiStepForm from "../src/components/MultiStepForm/MultiStepForm";
// import Homepage from "./components/Homepage";
import { steps, SuccessPage } from "./steps";
import { ObjectType } from "./type";

const initialValue = {
	plan: "arcade",
	billing: "Monthly",
	addons: [],
};

function App() {
	const handleSubmit = (data: ObjectType) => {
		return data
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