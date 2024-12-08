import React, { useContext } from 'react';
import { FormDataContext } from '../contexts/FormDataContext';
import { NavigationContext } from '../contexts/NavigationContext';
import PersonalInfoForm from './PersonalInfoForm';
import PlanSelectionForm from './PlanSelectionForm';
import AddOnsForm from './AddOnsForm';
import SummaryForm from './FinishUp';
import FormStep from './FormStep';

const FormContainer: React.FC = () => {
  const { currentStep } = useContext(NavigationContext);
  const { formData, submitForm } = useContext(FormDataContext);

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm />;
      case 2:
        return <PlanSelectionForm />;
      case 3:
        return <AddOnsForm />;
      case 4:
        return <SummaryForm />;
      default:
        return null;
    }
  };

  const handleFormSubmit = () => {
    submitForm(formData);
    // Perform form submission logic here
  };

  return (
    <div>
      <FormStep />
      {renderFormStep()}
      <button onClick={handleFormSubmit}>Confirm</button>
    </div>
  );
};
export default FormContainer;