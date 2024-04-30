import { getRoom, getRooms } from "../../services/collections.services"
import { Room } from "../../services/interfaces"

export interface TLoaderRooms {
    rooms: Room[]
}

export async function loaderRooms(): Promise<TLoaderRooms> {
    return {
        rooms: await getRooms()
    }
}

export interface TLoaderRoom {
    room: Room
}

export async function loaderRoom(id: string): Promise<TLoaderRoom | null> {
    if (id !== "new") return { room: await getRoom(id) }
    else return null
}