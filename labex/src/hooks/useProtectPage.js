import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function useProtectPage() {

    const navigate = useNavigate("/")

    const token = localStorage.getItem("token")

    const goToLogin = (navigate) => {
        navigate(`/login`)
    }
    useEffect(() => {
        if (!token) {
            goToLogin(navigate)
        }
    }, [])


}