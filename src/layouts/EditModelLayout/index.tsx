import { ButtonBack } from "../../components/ButtonBack";
interface TEditModelLayout {
    children: JSX.Element | JSX.Element[]
}

export function EditModelLayout(props: TEditModelLayout) {
    return <>
        <div className="flex justify-between max-w-6xl my-6">
            <h1 className="text-2xl ">Create an entry </h1>
            <ButtonBack />
        </div>
        <section className="flex max-lg:flex-col max-w-6xl w-full gap-4">
            {props.children}
            <div className="flex w-64 flex-col gap-4 h-full">
                <div className="border border-slate-600 rounded px-4 py-4"><p>Editing draft version</p></div>
                <div className="box-container flex flex-col gap-2 h-full flex-grow">
                    <h1>Information</h1>
                    <hr />
                    <h1 className="flex text-sm justify-between">Create At <span>Now</span></h1>
                    <h1 className="flex text-sm justify-between">Update At <span>Now</span></h1>
                </div>
                <button className="rounded py-1 hover:bg-opacity-70 button">Publish</button>
                <button className="bg-blue-500 rounded py-1 hover:bg-opacity-70 button-save">Save</button>
            </div>
        </section>
    </>
}