import Homepage from "./components/Homepage";
import MultiStepForm from "../src/components/MultiStepForm/MultiStepForm";
import { steps, SuccessPage } from "./steps";
import { FormData } from "./type";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
		<Router>
			<main className="container">
				{/* <h1 className="sr-only">Multi Step Form</h1> */}
				<Routes>
					<Route path="/"  element={ <Homepage />} />
					<Route path="/MultiStepForm" element={ <MultiStepForm
							steps={steps}
							handleSubmit={handleSubmit}
							initialValue={initialValue}
							SuccessPage={SuccessPage}
							/>}
					/>
				</Routes>
			</main>
		</Router>
	);
}
export default App;