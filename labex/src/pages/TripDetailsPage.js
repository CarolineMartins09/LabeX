import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
import { DescricaoViagem, Main, Section } from "./styleds/DetailsPageStyled"

function DetailsAdm() {
    //protecao de paginas
    useProtectPage();
    //navegacao
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
    }
    //Essa requisição retorna os detalhes e os candidatos de uma viagem específica.
    const [trip, setTrip] = useState({})

    const parametro = useParams()

    const getTripDetail = () => {
        axios.get(`${BASE_URL}trip/${parametro.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => {
            setTrip(response.data.trip)
        }).catch((erro) => { console.log(erro.data) })
    }

    useEffect(() => { getTripDetail() }, [])

    //requisicao para aprovar candidados
    const aprovado = (id) => {
        const body = {
            approve: true
        }
        axios.put(`${BASE_URL}trips/${parametro.id}/candidates/${id}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => { getTripDetail(); alert("Candidato Aprovado!"); }
        ).catch((erro) => { alert("Ouve um problema!"); })
    }
    //requisicao para reprovar candidados
    const reprovado = (candidatesId) => {
        const body = {
            approve: false
        }
        axios.put(`${BASE_URL}trips/${parametro.id}/candidates/${candidatesId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then((response) => { alert("Candidato reprovado!") }
        ).catch((erro) => { alert("Ouve um problema!") })
    }
    

    return (
        <Main>

            <h1>Viagens e Candidados</h1>
            <button onClick={lastPage}>Voltar</button>
            <DescricaoViagem>
                <h2>Planeta:</h2>
                <h3> {trip.planet}</h3>
                <h2>Nome:</h2>
                <h3> {trip.name}</h3>
                <h2>Data partida:</h2>
                <h3>{trip.date}</h3>
            </DescricaoViagem>

            <Section>
                <h1>Candidados</h1>
                {trip.candidates && trip.candidates.length > 0 ?
                    (trip.candidates && trip.candidates.map((i) => {
                        return (<div>
                            <div >
                                <p>{i.name}</p>
                                <p>Profissão:{i.profession}</p>
                                <p>Candidatura:{i.applicationText}</p>
                                <p>idade:{i.age}</p>
                                <button onClick={() => aprovado(i.id)}>Aprovar</button>
                                <button onClick={() => reprovado(i.id)}>Reprovar</button>
                            </div>
                        </div>)
                    }
                    )
                    ) :
                    (<h1>Não há candidados Pendentes</h1>)}
            </Section>

            {/* //map para ver candidatos aprovados */}
            <Section>
                {trip.approved && trip.approved.length > 0 ?
                    (trip.approved && trip.approved.map((i) => {
                        return (
                            <div>
                                <div >
                                    <p>Aprovado</p>
                                    <h4>{i.name}</h4>
                                </div>
                            </div>
                        )
                    })) :
                    (<h1>Não há candidados Aprovados</h1>)}
            </Section>

        </Main >
    )
}

export default DetailsAdm;