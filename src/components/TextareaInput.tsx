import React from "react";
import { TypeInputProps } from "./interfaces";

export class TextareaInput extends React.Component<TypeInputProps> {
    public id: string
    constructor(props: TypeInputProps) {
        super(props)
        this.id = 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    public render() {
        const { value, onChange, className, label, name, placeholder } = this.props
        return <div className="input">
            <label htmlFor={this.id}>{label}</label>
            <textarea
                placeholder={placeholder}
                className={className}
                value={value}
                onChange={(e) => { if (onChange) onChange(e) }}
                id={this.id}
                name={name} />
        </div>
    }
}