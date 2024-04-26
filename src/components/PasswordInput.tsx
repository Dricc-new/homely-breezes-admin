import React from "react";
import { TypeInputProps } from "./interfaces";

type InputMode = "text" | "search" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined

export class PasswordInput extends React.Component<TypeInputProps & { inputMode?: InputMode }> {

    public state: { type: "password" | "text" } = { type: "password" }

    public id: string
    constructor(props: TypeInputProps & { inputMode?: InputMode }) {
        super({ ...props, inputMode: props.inputMode || 'text' })
        this.id = 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    public render() {
        const { value, onChange, className, label, name, inputMode } = this.props

        return <div className="input">
            <label htmlFor={this.id}>{label}</label>
            <div className="flex relative items-center">
                <input
                    className={className}
                    value={value}
                    onChange={(e) => { if (onChange) onChange(e) }}
                    id={this.id}
                    name={name}
                    inputMode={inputMode}
                    type="password"
                />
                <i className="absolute fa fa-eye right-2"></i>
            </div>
        </div>
    }
}