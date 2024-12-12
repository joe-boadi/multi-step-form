// import { FormData } from '../../type';
import { Billing } from '../MultiStepForm/types';

export interface PlanOption {
    id: Plans;
    title: string;
    price: {
        Monthly: number;
        Yearly: number;
    };
    icon: string;
}

export type Plans = 'arcade' | 'advanced' | 'pro';

export interface PlanCardProps {
    plan: PlanOption;
    isSelected: boolean;
    billing: Billing;
    onSelect: (planId: Plans) => void;
}