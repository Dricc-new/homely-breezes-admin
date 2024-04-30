import { getOffer, getOffers } from "../../services/collections.services"
import { Offer } from "../../services/interfaces"

export interface TLoaderOffers {
    offers: Offer[]
}

export async function loaderOffers(): Promise<TLoaderOffers> {
    return {
        offers: await getOffers()
    }
}

export interface TLoaderOffer {
    offer: Offer
}

export async function loaderOffer(id: string): Promise<TLoaderOffer | null> {
    if (id !== "new") return { offer: await getOffer(id) }
    else return null
}