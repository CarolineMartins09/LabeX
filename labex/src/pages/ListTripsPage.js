import React from "react";
import { useNavigate } from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants"
import { Card, Button, Carreg, Main } from "./styleds/ListTripsStyled"


function ListaViagens() {

    //navegação
    const navigate = useNavigate();
    const tripListViagem = () => {
        navigate("/trips/aplicacao")
    }
    const lastPage = () => {
        navigate(-1)
    }
    const [dataTrip, isLoadingTrip, erroTrip] = useRequestData(`${BASE_URL}trips`)

    const cards = dataTrip && dataTrip.map((i) => {
        return (
            <Card>
                <div>
                    <h3>{i.name}</h3>
                    <h4>{i.description}</h4>
                    <p>{i.planet}</p>
                    <p>{i.durationInDays}</p>
                    <p>{i.date}</p>
                </div>
            </Card>
        )
    })

    return (
        <Main>
            <div>
                <h1>Viagens para tirar o Fôlego</h1>
                <Button>
                    <button onClick={lastPage}>Voltar</button>
                    <button onClick={tripListViagem}>Inscreva-se</button>
                </Button>
            </div>

            {isLoadingTrip && <Carreg>...CARREGANDO...</Carreg>}
            {!isLoadingTrip && cards}
            {!isLoadingTrip && !cards && erroTrip}

        </Main>
    )
}

export default ListaViagens;