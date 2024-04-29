import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { useParams } from "react-router-dom"
import { ImageInput } from "../../components/ImageInput"
import { EditModelLayout } from "../../layouts/EditModelLayout"

export function EditOfferView() {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    return <EditModelLayout>
        <div className="box-container w-full">
            <ImageInput />
            <TextInput name="title" label="Title" />
            <TextareaInput className="h-24 w-full" label="Description" name="description" />
        </div>
    </EditModelLayout>
}