import { EPublishState } from "../components/PublishState/interface"

export interface Offer {
    id: string
    title: string
    img: File | string
    description: string
    state: EPublishState
}

export interface Food {
    id: string
    title: string
    img: File | string
    description: string
    state: EPublishState
}

export interface Room {
    id: string
    title: string
    price: number
    img: File | string
    description: string
    state: EPublishState
}