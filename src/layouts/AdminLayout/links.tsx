import { NavLink } from "react-router-dom"
import { ETypeLink, TypeNavLinks } from "./interfaces"
import { Dispatch, SetStateAction, useId, useState } from "react"

function Item(props: { item: TypeNavLinks, index: number, setShowMenu: Dispatch<SetStateAction<boolean>>, showMenu: boolean }) {
    switch (props.item.type) {
        case ETypeLink.link:
            return <NavLink className={({ isActive, isPending }) => isPending ? "link-pending" : isActive ? "link-active" : ""} to={props.item.url || ''}>{props.item.label}</NavLink>
        case ETypeLink.title:
            return <span >{props.item.label}</span>
        case ETypeLink.submenu:
            return props.item.children && <>
                <button onClick={() => props.setShowMenu(prev => !prev)} className={props.showMenu ? 'button-active' : ''}>{props.item.label}</button>
                {props.showMenu && <Links list={props.item.children} />}
            </>
    }
}

export function Links(props: { list: TypeNavLinks[] }) {
    const [showMenu, setShowMenu] = useState(false)
    const ID = useId()
    return <menu>
        {props.list.map(
            (item, index) => <Item
                key={`${ID}_${index}`}
                item={item}
                index={index}
                setShowMenu={setShowMenu}
                showMenu={showMenu}
            />)}
    </menu>
}
