import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)
    const [page, setPage] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setLoading(false)
            setData(response.data.trips)
        }).catch((error) => {
            setLoading()
            setErro(error)
        })
    }, [page])

    return [data, isLoading, erro, page, setPage];

}

export default useRequestData;