import { DataTable } from "primereact/datatable";
import { Link } from "react-router-dom";

interface TSecctionIndex {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
    children: JSX.Element | JSX.Element[]
    title: string
    titleNewButton?: string
    urlNewItem: string
}

export function SecctionIndex(props: TSecctionIndex) {
    return <>
        <header className="flex justify-between my-6">
            <h1 className="text-2xl">{props.title}</h1>
            <Link to={props.urlNewItem} className="button"><i className="fas fa-plus"></i> {props.titleNewButton || 'New Item'}</Link>
        </header>

        <div className="table">
            <DataTable value={props.value} unstyled>
                {props.children}
            </DataTable>
        </div>
    </>
}