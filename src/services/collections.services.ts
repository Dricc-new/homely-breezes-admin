import { EPublishState } from "../components/PublishState/interface";
import { Food, Offer, Room } from "./interfaces";

export const offers: Offer[] = [
    {
        id: '1',
        title: 'Deluxe Room',
        img: '/vite.svg',
        state: EPublishState.Draft
    }, {
        id: '2',
        title: 'Deluxe Room',
        img: '/vite.svg',
        state: EPublishState.Publish
    }
]

export const foods: Food[] = [
    {
        id: '1',
        title: 'Deluxe Room',
        img: '/vite.svg',
        state: EPublishState.Publish
    }, {
        id: '2',
        title: 'Deluxe Room',
        img: '/vite.svg',
        state: EPublishState.Publish
    }
]

export const rooms: Room[] = [
    {
        id: '1',
        title: 'Deluxe Room',
        price: 330,
        img: '/vite.svg',
        state: EPublishState.Publish
    }, {
        id: '2',
        title: 'Deluxe Room',
        price: 330,
        img: '/vite.svg',
        state: EPublishState.Publish
    }
]