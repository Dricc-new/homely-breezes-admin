import { FileInput } from "./FileInput";

export function ImageInput(props: { name?: string, label?: string }) {
    return <FileInput label={props.label || 'Image'}
        message={<>
            <i className="far fa-image text-5xl opacity-80" />
            <span className="flex items-center opacity-80 gap-2">
                Drag and Drop
                <br />
                or Click here
            </span>
        </>}
        name={props.name || 'image'}
        className="h-[200px]"
        accept="image/*" />
}