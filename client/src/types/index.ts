export interface CategoryProps {
    id: string;
    title: string;
    icon: string;
}

export interface ImageSliderProps {
    images: string[];
}

export interface FormState {
    userType: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface UpdateFieldAction {
    type: "UPDATE_FIELD";
    field: keyof FormState;
    value: string;
}

export type FormAction = UpdateFieldAction;