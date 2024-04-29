import { Column } from "primereact/column";
import { PublishState } from "../../components/PublishState/PublishState";
import { editItemTableButton, ImageItemTable, SecctionIndex } from "../../layouts/SecctionIdexLayout";
import { rooms } from "../../services/collections.services";

export function RoomsView() {
    return <SecctionIndex value={rooms} title="Rooms" urlNewItem="/rooms/new" titleNewButton="New Room">
        <Column field="id" header="ID" />
        <Column field="title" header="Title" />
        <Column field="price" header="Price" />
        <Column field="img" body={rowData => ImageItemTable(rowData.img)} header="Image" />
        <Column field="state" body={rowData => PublishState(rowData.state)} style={{ width: '120px' }} header="State" />
        <Column field="state" body={rowData => editItemTableButton(`/rooms/${rowData.id}`)} style={{ width: '20px' }} header="" />
    </SecctionIndex>
}