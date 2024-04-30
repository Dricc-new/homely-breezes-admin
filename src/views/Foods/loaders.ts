import { getFood, getFoods } from "../../services/collections.services";
import { Food } from "../../services/interfaces";

export interface TLoaderFoods {
    foods: Food[]
}

export async function loaderFoods(): Promise<TLoaderFoods> {
    return {
        foods: await getFoods()
    }
}

export interface TLoaderFood {
    food: Food
}

export async function loaderFood(id: string): Promise<TLoaderFood | null> {
    if (id !== 'new') return { food: await getFood(id) }
    else return null
}