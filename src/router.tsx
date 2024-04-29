import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ErrorView } from "./views/ErrorView";
import AdminLayout, { ETypeLink, TypeNavLinks } from "./layouts/AdminLayout";
import { LinkLabel } from "./components/LinkLabel";
import { RoomsView } from "./views/Rooms";
import { EditRoomView } from "./views/Rooms/EditRoomView";
import { LoginView } from "./views/Auth/LoginView";
import { RegisterView } from "./views/Auth/RegisterView";
import { FoodsView } from "./views/Foods";
import { EditFoodView } from "./views/Foods/EditFoodView";
import { OffersView } from "./views/Offers";
import { EditOfferView } from "./views/Offers/EditOfferView";
// import { blogNavLinks, blogRoutes } from "./modules/Blog/routes";

const nav: TypeNavLinks[] = [
    { type: ETypeLink.link, label: <LinkLabel icon="pi pi-box" text="Dashboard" />, url: '/' },
    { type: ETypeLink.title, label: 'Settings' },
    // blogNavLinks,

    //Rooms

    {
        type: ETypeLink.submenu, label: <LinkLabel icon="fas fa-list-alt" text="Collections" />,
        children: [
            { label: 'Offers', type: ETypeLink.link, url: '/offers' },
            { label: 'Foods', type: ETypeLink.link, url: '/foods' },
            { label: 'Rooms', type: ETypeLink.link, url: '/rooms' },
        ]
    },

    { type: ETypeLink.link, label: <LinkLabel icon="pi pi-sliders-h" text="Settings" />, url: '/settings' },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout links={nav}><div className="container mx-auto"><Outlet /></div></AdminLayout>,
        children: [
            { path: "/", element: <HomeView /> },
            // blogRoutes

            // Rooms
            { path: "/rooms", element: <RoomsView /> },
            { path: "/rooms/:id", element: <EditRoomView /> },

            // Foods
            { path: "/foods", element: <FoodsView /> },
            { path: "/foods/:id", element: <EditFoodView /> },

            // Offers
            { path: "/offers", element: <OffersView /> },
            { path: "/offers/:id", element: <EditOfferView /> },

        ]
    },
    {
        path: "/auth",
        element: <section className="auth-layout"><main className="flex flex-col justify-center items-center"><Outlet /></main></section>,
        children: [
            { path: "/auth/login", element: <LoginView /> },
            { path: "/auth/register", element: <RegisterView /> }
        ]
    },
    { path: "*", element: <ErrorView /> },
]);

export default router