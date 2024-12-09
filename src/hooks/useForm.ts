import { useState } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

type ValidationFunction = (values: FormValues) => FormErrors;
type SubmitCallback = () => void;

export const useForm = (
  initialValues: FormValues,
  validate: ValidationFunction,
  onSubmit: SubmitCallback
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate(values);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      onSubmit();
    }
  };

  return { values, errors, handleChange, handleSubmit };
};