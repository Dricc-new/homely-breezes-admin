import React from "react";
import { TypeInputProps } from "./interfaces";

export class TextInput extends React.Component<TypeInputProps & { type?: string }> {
    public id: string
    constructor(props: TypeInputProps & { type?: string }) {
        super({ ...props, type: props.type ? props.type : 'text' })
        this.id = 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    public render() {
        const { value, onChange, className, label, name, type } = this.props
        return <div className="input">
            <label htmlFor={this.id}>{label}</label>
            <input
                className={className}
                value={value}
                onChange={(e) => { if (onChange) onChange(e) }}
                id={this.id}
                name={name}
                type={type}
            />
        </div>
    }
}