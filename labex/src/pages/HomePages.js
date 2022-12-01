import React from "react";
import { useNavigate } from "react-router-dom"
import useRequestData from "../hooks/useRequestData";
import { Main, Conteiner } from "./styleds/HomeStyled"

function Home() {
  const navigate = useNavigate();

  const tripList = () => {
    navigate("/trips/list")
  }
  const tripAdm = () => {
    navigate("/login")
  }
  const [data, isLoading]=useRequestData()
  return (
    <Main>
      <Conteiner>
        <div>

          {isLoading && <h1>...CARREGANDO...</h1>}
          
          <h3>BEM-VIND@S</h3>
          <h3>Ao LabeX </h3>
          <h4>venha ter uma experiência de outro Planeta!</h4>

          <button onClick={tripList}>Lista de Viagens</button>
          <button onClick={tripAdm}>Administrativo</button>
        </div>

      </Conteiner>
    </Main>
  )
}

export default Home;