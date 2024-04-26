export function LinkLabel(props:{text:string,icon:string}){
    return <h1 className="flex items-center gap-2"><i className={props.icon}></i>{props.text}</h1>
}