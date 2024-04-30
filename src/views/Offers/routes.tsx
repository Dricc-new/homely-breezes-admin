import OffersView, { EditOfferView } from ".";
import { loaderOffer, loaderOffers } from "./loaders";

export const offersRoutes = {
    children: [
        { path: "/offers", element: <OffersView />, loader: loaderOffers },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        { path: "/offers/:id", element: <EditOfferView />, loader: (data: any) => loaderOffer(data.params.id) },
    ]
}