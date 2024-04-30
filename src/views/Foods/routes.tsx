import FoodsView, { EditFoodView } from ".";
import { loaderFood, loaderFoods } from "./loaders";

export const foodsRoutes = {
    children: [
        { path: "/foods", element: <FoodsView />, loader: loaderFoods },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { path: "/foods/:id", element: <EditFoodView />, loader: (data: any) => loaderFood(data.params.id) },
    ]
}