import { Column } from "primereact/column";
import { PublishState } from "../../components/PublishState/PublishState";
import { editItemTableButton, ImageItemTable, SecctionIndex } from "../../layouts/SecctionIdexLayout";
import { offers } from "../../services/collections.services";

export function OffersView() {
    return <SecctionIndex value={offers} title="Offers" urlNewItem="/offers/new" titleNewButton="New Offer">
        <Column field="id" header="ID"></Column>
        <Column field="title" header="Title" />
        <Column field="img" body={rowData => ImageItemTable(rowData.img)} header="Image" />
        <Column field="state" body={(rowData) => PublishState(rowData.state)} style={{ width: '120px' }} header="State" />
        <Column field="state" body={(rowData) => editItemTableButton(`/offers/${rowData.id}`)} style={{ width: '20px' }} header="" />
    </SecctionIndex>
}