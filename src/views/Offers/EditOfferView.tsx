import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { useLoaderData } from "react-router-dom"
import { ImageInput } from "../../components/ImageInput"
import { EditModelLayout } from "../../layouts/EditModelLayout"
import { TLoaderOffer } from "./loaders"
import { useHandleInputChange } from "../../utils/hooks"
import { newOffer, updateOffer } from "../../services/collections.services"
import { Offer } from "../../services/interfaces"

export function EditOfferView() {
    const data = useLoaderData() as TLoaderOffer | undefined
    let offer: Partial<Offer> = { img: '', title: '', description: '' }
    if (data) offer = data.offer
    
    const [editForm, handleChange] = useHandleInputChange(offer)

    const save = () => {
        if (data) updateOffer(data.offer.id, editForm as Offer)
        else newOffer(editForm as Offer)
    }

    return <EditModelLayout save={save}>
        <form className="box-container w-full">
            <ImageInput label="Image" value={offer.img} name="img" onChange={handleChange} />
            <TextInput value={editForm?.title} onChange={handleChange} name="title" label="Title" />
            <TextareaInput value={editForm?.description} onChange={handleChange} className="h-24 w-full" label="Description" name="description" />
        </form>
    </EditModelLayout>
}