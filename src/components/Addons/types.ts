import { Billing } from '../MultiStepForm/types';

export interface Addon {
    title: string;
    desc: string;
    price: {
        Monthly: number;
        Yearly: number;
    };
}

export interface AddOnProps {
    addon: Addon;
    isSelected: boolean;
    billing: Billing;
    onSelect: (title: string) => void;
}