export enum ETypeLink {
    link, title, submenu
}

export type TypeNavLinks = {
    type: ETypeLink
    label: string | JSX.Element | JSX.Element[]
    url?: string
    children?: TypeNavLinks []
}

export interface AdminLayoutProps {
    links: TypeNavLinks[],
    children: string | JSX.Element | JSX.Element[]
}
