import { Link } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function editItemTableButton(edit_url: string) {
    return <Link to={edit_url} className="w-6 h-6 m-2"><i className="fas text-lg fa-pencil"></i></Link>
}