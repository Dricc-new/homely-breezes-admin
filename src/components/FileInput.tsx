import React, { BaseSyntheticEvent } from 'react'
import { TypeInputProps } from './interfaces';

interface TypeProps extends TypeInputProps {
    onChange?: CallableFunction;
    message?: string | JSX.Element;
    multiple?: boolean;
    className?: string;
    accept?: string;
    value?: string | File| File[];
}

export class FileInput extends React.Component<TypeProps> {
    public state: { files: string | null } = { files: null }

    public id: string
    constructor(props: TypeProps) {
        super(props)
        this.id = 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    }

    public render() {
        const { accept, multiple, label, name, message, className } = this.props
        const onChange = (event: BaseSyntheticEvent) => {
            const reader = new FileReader();
            const file = event.target.files[0]

            reader.onloadend = () => { if (typeof reader.result === 'string') this.setState({ files: reader.result }) }

            if (file) reader.readAsDataURL(file);
            else this.setState({ files: null })

            if (this.props.onChange) this.props.onChange(event)
        }

        return <div className={'file-input ' + className}>
            <label htmlFor={this.id} className='label'>{label}</label>
            <label htmlFor={this.id} className='drag-area'>
                {(this.state.files && <div className='box-files'>
                    <img src={this.state.files} alt={label} />
                </div>
                ) || (message || 'Drag and Drop or click to upload a file')}
            </label>
            <input id={this.id} name={name} accept={accept} multiple={multiple} onChange={onChange} type="file" hidden />
        </div>
    }
}
