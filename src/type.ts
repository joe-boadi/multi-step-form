import { Billing } from './components/MultiStepForm/types';
// Define more specific types for the form data
export type FormData = {
	name: string;
	email: string;
	phone: string;
	plan: string;
	billing: Billing;
	addons: string[];
	[key: string]: string | string[] | Billing; // Add an index signature
  };

// Update ObjectType to be more specific
export type ObjectType = FormData

export type ComponentPropsType = {
    data: FormData;
    setData: React.Dispatch<React.SetStateAction<FormData>>;
    errors: Record<string, string>;
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};