import { NumberInput } from "../../components/NumberInput"
import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { ImageInput } from "../../components/ImageInput"
import { EditModelLayout } from "../../layouts/EditModelLayout"
import { useLoaderData } from "react-router-dom"
import { TLoaderRoom } from "./loaders"
import { Room } from "../../services/interfaces"
import { useHandleInputChange } from "../../utils/hooks"
import { newRoom, updateRoom } from "../../services/collections.services"

export function EditRoomView() {
    const data = useLoaderData() as TLoaderRoom | undefined
    let room: Partial<Room> = { img: '', title: '', description: '', price: 0.00 }
    if (data) room = data.room

    const [editForm, handleChange] = useHandleInputChange(room)

    const save = () => {
        if (data) updateRoom(data.room.id, editForm as Room)
        else newRoom(editForm as Room)
    }

    return <EditModelLayout save={save}>
        <form className="box-container w-full">
            <ImageInput label="Image" value={room.img} name="img" onChange={handleChange} />
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <TextInput value={editForm?.title} onChange={handleChange} name="title" label="Title" />
                </div>
                <NumberInput min={0.00} value={editForm?.price} onChange={handleChange} name="price" label="Price" />
            </div>
            <TextareaInput value={editForm?.description} onChange={handleChange} className="h-24 w-full" label="Description" name="description" />
        </form>
    </EditModelLayout>
}