export interface TypeInputProps {
    label?: string;
    name?: string;
    value?: string;
    onChange?: CallableFunction;
    className?: string;
    placeholder?: string;
}

export enum TextInputType{
    TEXT="text",
    EMAIL="email",
    PASSWORD="password",
}