import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { useLoaderData } from "react-router-dom"
import { ImageInput } from "../../components/ImageInput"
import { EditModelLayout } from "../../layouts/EditModelLayout"
import { TLoaderFood } from "./loaders"
import { useHandleInputChange } from "../../utils/hooks"
import { Food } from "../../services/interfaces"
import { newFood, updateFood } from "../../services/collections.services"

export function EditFoodView() {
    const data = useLoaderData() as TLoaderFood | undefined
    let food: Partial<Food> = { img: '', title: '', description: '' }

    if (data) food = data.food
    const [editForm, handleChange] = useHandleInputChange(food)

    const save = () => {
        if (data) updateFood(data.food.id, editForm as Food)
        else newFood(editForm as Food)
    }

    return <EditModelLayout save={save}>
        <form className="box-container w-full">
            <ImageInput label="Image" value={food.img} name="img" onChange={handleChange} />
            <TextInput value={editForm?.title} onChange={handleChange} name="title" label="Title" />
            <TextareaInput value={editForm?.description} onChange={handleChange} className="h-24 w-full" label="Description" name="description" />
        </form>
    </EditModelLayout>
}