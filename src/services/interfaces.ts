import { EPublishState } from "../components/PublishState/interface"

export interface Offer {
    id: string
    title: string
    img: string
    state: EPublishState
}

export interface Food {
    id: string
    title: string
    img: string
    state: EPublishState
}

export interface Room {
    id: string
    title: string
    price: number
    img: string
    state: EPublishState
}