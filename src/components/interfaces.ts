export interface TypeInputProps {
    label?: string;
    name?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: string|any;
    onChange?: CallableFunction;
    className?: string;
    placeholder?: string;
}

export enum TextInputType{
    TEXT="text",
    EMAIL="email",
    PASSWORD="password",
}