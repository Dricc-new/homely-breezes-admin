import { useNavigate } from "react-router-dom";


export function ButtonBack() {
    const navigate = useNavigate();
    return <button onClick={() => navigate(-1)} className="flex items-center text-blue-600 gap-2">
        <i className="pi pi-arrow-left"></i> Back
    </button>
}