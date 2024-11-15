import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";

export default function Index() {

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/dashboard" when the component mounts
    navigate('/dashboard');
  }, [navigate])
}
