import { FileInput } from "../../components/FileInput"
import { NumberInput } from "../../components/NumberInput"
import { TextInput } from "../../components/TextInput"
import { TextareaInput } from "../../components/TextareaInput"
import { ButtonBack } from "../../components/ButtonBack"
import { useParams } from "react-router-dom"

export function EditRoomView() {
    const { id } = useParams<{ id: string }>();
    console.log(id)
    return <>
        <div className="flex justify-between max-w-6xl my-6">
            <h1 className="text-2xl ">Create an entry </h1>
            <ButtonBack />
        </div>
        <section className="flex max-lg:flex-col max-w-6xl w-full gap-4">
            <div className="box-container w-full">
                <FileInput label="Image"
                    message={<>
                        <i className="far fa-image text-5xl opacity-80" />
                        <span className="flex items-center opacity-80 gap-2">
                            Drag and Drog
                            <br />
                            or Click here
                        </span>
                    </>}
                    className="h-[200px]"
                    accept="image/*" />
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                        <TextInput name="title" label="Title" />
                    </div>
                    <NumberInput name="price" label="Price" />
                </div>
                <TextareaInput className="h-24 w-full" label="Description" name="description" />
            </div>
            <div className="flex w-64 flex-col gap-4 h-full">
                <div className="border border-slate-600 rounded px-4 py-4"><p>Editing draft version</p></div>
                <div className="box-container flex flex-col gap-2 h-full flex-grow">
                    <h1>Information</h1>
                    <hr />
                    <h1 className="flex text-sm justify-between">Create At <span>Now</span></h1>
                    <h1 className="flex text-sm justify-between">Update At <span>Now</span></h1>
                </div>
                <button className="bg-blue-500 rounded py-1 hover:bg-opacity-70 button-save">Save</button>
            </div>
        </section>
    </>
}