import { JSX } from "react/jsx-runtime";
import { FileInput } from "./FileInput";
import { BaseSyntheticEvent } from "react";

export class ImageInput extends FileInput {

    public initValue = typeof this.props.value === 'string' ? this.props.value : ''
    public state: { files: string } = { files: this.initValue }
    public render(): JSX.Element {
        const { multiple, label, name, className } = this.props
        const onChange = (event: BaseSyntheticEvent) => {
            const reader = new FileReader();
            const file = event.target.files[0]

            reader.onloadend = () => { if (typeof reader.result === 'string') this.setState({ files: reader.result }) }

            if (file) reader.readAsDataURL(file);
            else this.setState({ files: this.initValue })

            const data = { ...event, target: { name, value: multiple ? event.target.files : event.target.files[0] } }
            if (this.props.onChange) this.props.onChange(data)
        }


        return <div className={'file-input h-[200px] ' + className}>
            <label htmlFor={this.id} className='label'>{label}</label>
            <label htmlFor={this.id} className='drag-area'>
                {(this.state.files && <div className='box-files'>
                    <img src={this.state.files} alt={label} />
                </div>
                ) || <>
                        <i className="far fa-image text-5xl opacity-80" />
                        <span className="flex items-center opacity-80 gap-2">
                            Drag and Drop
                            <br />
                            or Click here
                        </span>
                    </>}
            </label>
            <input
                id={this.id}
                name={name || 'image'}
                accept="image/*"
                multiple={multiple}
                onChange={onChange}
                type="file"
                hidden />
        </div>
    }
}