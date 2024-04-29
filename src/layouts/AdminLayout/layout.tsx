import React from "react";
import { AdminLayoutProps } from "./interfaces";
import '../styles.css'
import { Links } from "./links";

export class AdminLayout extends React.Component<AdminLayoutProps> {

    public state = {
        showNav: false
    }

    constructor(props: AdminLayoutProps) {
        super(props)
        this.state = { showNav: window.innerWidth > 640 }
        window.onresize = () => this.setState({ showNav: window.innerWidth > 640 })
    }

    public render() {
        const { links, children } = this.props
        const showNav = this.state.showNav

        return <section className="admin-layout">
            <aside>
                <div className="logo">
                    <h1 className="text-4xl">Log<i className="pi pi-android text-3xl" /></h1>
                </div>
                <nav>
                    <button onClick={() => this.setState({ showNav: !showNav })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 6.3499999 6.3499999" version="1.1" id="bars">
                            <path d="M 0.24546305 0.52916667 C 0.10935397 0.52916667 0 0.63852063 0 0.77462972 L 0 1.0774536 C 1.9583081e-17 1.2135627 0.10935397 1.3229167 0.24546305 1.3229167 L 6.1045369 1.3229167 C 6.240646 1.3229167 6.35 1.2135627 6.35 1.0774536 L 6.35 0.77462972 C 6.35 0.63852063 6.240646 0.52916667 6.1045369 0.52916667 L 0.24546305 0.52916667 z M 0.24546305 2.778125 C 0.10935397 2.778125 0 2.8874789 0 3.0235881 L 0 3.3264119 C 1.9583081e-17 3.462521 0.10935397 3.571875 0.24546305 3.571875 L 6.1045369 3.571875 C 6.240646 3.571875 6.35 3.462521 6.35 3.3264119 L 6.35 3.0235881 C 6.35 2.8874789 6.240646 2.778125 6.1045369 2.778125 L 0.24546305 2.778125 z M 0.24546305 5.0270833 C 0.10935397 5.0270833 0 5.1364373 0 5.2725464 L 0 5.5753703 C 1.9583081e-17 5.7114793 0.10935397 5.8208333 0.24546305 5.8208333 L 6.1045369 5.8208333 C 6.240646 5.8208333 6.35 5.7114793 6.35 5.5753703 L 6.35 5.2725464 C 6.35 5.1364373 6.240646 5.0270833 6.1045369 5.0270833 L 0.24546305 5.0270833 z " />
                        </svg>
                    </button>
                    {(showNav || window.innerWidth > 640) && <Links list={links} />}
                </nav>
            </aside>
            <main>
                {children}
            </main>
        </section >
    }
}
