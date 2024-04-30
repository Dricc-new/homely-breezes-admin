import { createBrowserRouter,  Outlet } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { ErrorView } from "./views/ErrorView";
import AdminLayout, { ETypeLink, TypeNavLinks } from "./layouts/AdminLayout";
import { LinkLabel } from "./components/LinkLabel";
import { LoginView } from "./views/Auth/LoginView";
import { RegisterView } from "./views/Auth/RegisterView";
import { offersRoutes } from "./views/Offers/routes";
import { foodsRoutes } from "./views/Foods/routes";
import { roomsRoutes } from "./views/Rooms/routes";

const nav: TypeNavLinks[] = [
    { type: ETypeLink.link, label: <LinkLabel icon="pi pi-box" text="Dashboard" />, url: '/' },
    { type: ETypeLink.title, label: 'Settings' },
    // blogNavLinks,

    {
        type: ETypeLink.submenu, label: <LinkLabel icon="fas fa-list-alt" text="Collections" />,
        children: [
            { label: 'Offers', type: ETypeLink.link, url: '/offers' },
            { label: 'Foods', type: ETypeLink.link, url: '/foods' },
            { label: 'Rooms', type: ETypeLink.link, url: '/rooms' },
        ],
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
            roomsRoutes,
            foodsRoutes,
            offersRoutes,
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