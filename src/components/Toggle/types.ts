import { FormData } from '../../type';

export type ToggleOption = string | { label: string; value: string };

export type ToggleProps = {
    options: [ToggleOption, ToggleOption];
    name: keyof FormData;
    data: FormData;
    setData: React.Dispatch<React.SetStateAction<FormData>>;
};