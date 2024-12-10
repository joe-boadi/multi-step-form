// useValidation.ts
import { MouseEvent, useCallback, useState } from "react";
import { ObjectType } from "../type";

type useValidationReturnType = {
    errors: {};
    reset: () => void;
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
};

type useValidationType = (
    data: ObjectType,
    handleSubmit: () => void,
    onError?: () => void
) => useValidationReturnType;

const useValidation: useValidationType = (data, handleSubmit, onError) => {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const newErrors: any = {};

        // Name validation
        if (!data.name) {
            newErrors.name = "This field is Required";
        } else if (data.name.length < 3) {
            newErrors.name = "Minimum 3 characters required";
        } else if (!/^[a-zA-Z\s_]*$/.test(data.name)) {
            newErrors.name = "Invalid character in name";
        }

        // Email validation
        if (!data.email) {
            newErrors.email = "This field is Required";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
            newErrors.email = "Invalid mail address";
        }

        // Phone validation
        if (!data.phone) {
            newErrors.phone = "This field is Required";
        } else if (data.phone.length < 3) {
            newErrors.phone = "Minimum 3 characters required";
        } else if (!/^[+0-9\s]*$/.test(data.phone)) {
            newErrors.phone = "Invalid character in phone number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const onSubmit = (e: MouseEvent<HTMLButtonElement> | SubmitEvent) => {
        e.preventDefault();
        setTouched(true);
        setSubmitting(true);
        if (validate()) {
            handleSubmit();
        } else {
            onError?.();
        }
    };

    const reset = useCallback(() => {
        setTouched(false);
        setSubmitting(false);
        setErrors({});
    }, []);

    return { errors, onSubmit, reset };
};

export default useValidation;