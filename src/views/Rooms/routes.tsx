import RoomsView, { EditRoomView } from ".";
import { loaderRoom, loaderRooms } from "./loaders";

export const roomsRoutes = {
    children: [
        { path: "/rooms", element: <RoomsView />, loader: loaderRooms },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { path: "/rooms/:id", element: <EditRoomView />, loader: (data: any) => loaderRoom(data.params.id) },
    ]
}