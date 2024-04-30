import { BaseSyntheticEvent, useState } from "react";

export function useHandleInputChange<T>(init: T): [T | undefined, CallableFunction] {
    const [form, setForm] = useState<T>(init)

    const handleChange = (event: BaseSyntheticEvent) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name: string = target.name;
        setForm(prev => { return { ...prev, [name]: value } });
    }
    return [form, handleChange]
}