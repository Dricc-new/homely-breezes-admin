import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Link } from "react-router-dom";



enum State {
    Draft = 'Draft', Publish = 'Published'
}

interface Room {
    id: string
    title: string
    price: number
    img: string
    state: State
}

export function RoomsView() {
    const rooms: Room[] = [
        {
            id: '1',
            title: 'Deluxe Room',
            price: 330,
            img: '/vite.svg',
            state: State.Publish
        }, {
            id: '2',
            title: 'Deluxe Room',
            price: 330,
            img: '/vite.svg',
            state: State.Publish
        }
    ]

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Img = (rowData: any) => {
        return <img src={`${rowData.img}`} alt={rowData.img} className="w-8 h-8 object-cover" />;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const state = (rowData: any) => {
        return <span className={`border px-3 py-1 rounded ${rowData.state ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}> {rowData.state} </span>
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const edit = (rowData: any) => {
        return <Link to={`/rooms/${rowData.id}`} className="w-6 h-6 m-2"><i className="fas text-lg fa-pencil"></i></Link>
    }

    return <>
        <header className="flex justify-between my-6">
            <h1 className="text-2xl">Rooms</h1>
            <Link to="/rooms/new" className="button"><i className="fas fa-plus"></i> New Room</Link>
        </header>

        <div className="table">
            <DataTable value={rooms} unstyled>
                <Column field="id" header="ID"></Column>
                <Column field="title" header="Title"></Column>
                <Column field="price" header="Price"></Column>
                <Column field="img" body={Img} header="Image"></Column>
                <Column field="state" body={state} style={{ width: '120px' }} header="State"></Column>
                <Column field="state" body={edit} style={{ width: '20px' }} header=""></Column>
            </DataTable>
        </div>
    </>
}