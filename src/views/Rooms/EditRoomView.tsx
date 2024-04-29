import { NumberInput } from "../../components/NumberInput"
import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { useParams } from "react-router-dom"
import { ImageInput } from "../../components/ImageInput"
import { EditModelLayout } from "../../layouts/EditModelLayout"

export function EditRoomView() {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    return <EditModelLayout>
        <div className="box-container w-full">
            <ImageInput />
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <TextInput name="title" label="Title" />
                </div>
                <NumberInput name="price" label="Price" />
            </div>
            <TextareaInput className="h-24 w-full" label="Description" name="description" />
        </div>
    </EditModelLayout>
}