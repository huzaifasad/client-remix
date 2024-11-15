import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/error-404');
    }, [navigate])
}

export default PageNotFound
