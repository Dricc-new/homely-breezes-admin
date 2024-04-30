import { Food, Offer, Room } from "./interfaces";
import foods from './foods.json'
import offers from './offers.json'
import rooms from './rooms.json'

export async function getOffers(): Promise<Offer[]> { return offers as Offer[] }
export async function newOffer(offer: Offer) { console.log(offer) }
export async function updateOffer(id: string, offer: Offer) { console.log(offer) }
export async function deleteOffer(id: string) { console.log(id) }
export async function getOffer(id: string): Promise<Offer> {
    console.log(id)
    return offers[0] as Offer
}

export async function getFoods(): Promise<Food[]> { return foods as Food[] }
export async function newFood(food: Food) { console.log(food) }
export async function updateFood(id: string, food: Food) { console.log(food) }
export async function deleteFood(id: string) { console.log(id) }
export async function getFood(id: string): Promise<Food> {
    console.log(id)
    return foods[0] as Food
}


export async function getRooms(): Promise<Room[]> { return rooms as Room[] }
export async function newRoom(room: Room) { console.log(room) }
export async function updateRoom(id: string, room: Room) { console.log(room) }
export async function deleteRoom(id: string) { console.log(id) }
export async function getRoom(id: string): Promise<Room> {
    console.log(id)
    return rooms[0] as Room
}