import React from "react";
import { TypeInputProps } from "./interfaces";

interface TypeProps extends TypeInputProps {
    min?: number
    max?: number
}

export class NumberInput extends React.Component<TypeProps> {
    public id: string
    constructor(props: TypeProps) {
        super(props)
        this.id = 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    public render() {
        const { value, onChange, className, label, name, min, max } = this.props
        return <div className="input">
            <label htmlFor={this.id}>{label}</label>
            <input
                className={className}
                value={value}
                onChange={(e) => { if (onChange) onChange(e) }}
                id={this.id}
                name={name}
                min={min}
                max={max}
                type="number"
            />
        </div>
    }
}