import { NavLink } from "react-router-dom"
import { ETypeLink, TypeNavLinks } from "./interfaces"
import { useId, useState } from "react"

export function Links(props: { list: TypeNavLinks[] }) {
    const [showMenu, setShowMenu] = useState(false)
    const ID = useId()
    return <menu>
        {props.list.map((item, index) => {
        switch (item.type) {
            case ETypeLink.link:
                return <NavLink key={ID + index.toString()} className={({ isActive, isPending }) => isPending ? "link-pending" : isActive ? "link-active" : ""} to={item.url || ''}>{item.label}</NavLink>
            case ETypeLink.title:
                return <span key={ID + index.toString()}>{item.label}</span>
            case ETypeLink.submenu:
                return item.children && <>
                    <button key={ID + index.toString() + 'button'} onClick={() => setShowMenu(!showMenu)} className={showMenu ? 'button-active' : ''}>{item.label}</button>
                    {showMenu && <Links list={item.children} key={ID + index.toString() + 'menu'} />}
                </>
        }
    })}
    </menu>
}
