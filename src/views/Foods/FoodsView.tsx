import { Column } from "primereact/column";
import { PublishState } from "../../components/PublishState/PublishState";
import { editItemTableButton, ImageItemTable, SecctionIndex } from "../../layouts/SecctionIdexLayout";
import { useLoaderData } from "react-router-dom";
import { TLoaderFoods } from "./loaders";

export function FoodsView() {
    
    const { foods } = useLoaderData() as TLoaderFoods

    return <SecctionIndex value={foods} title="Foods" urlNewItem="/foods/new">
        <Column field="id" header="ID" />
        <Column field="title" header="Title" />
        <Column field="img" body={rowData => ImageItemTable(rowData.img)} header="Image" />
        <Column field="state" body={(rowData) => PublishState(rowData.state)} style={{ width: '120px' }} header="State" />
        <Column field="state" body={(rowData) => editItemTableButton(`/foods/${rowData.id}`)} style={{ width: '20px' }} header="" />
    </SecctionIndex>
}