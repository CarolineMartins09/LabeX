import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForms"
import { BASE_URL } from "../constants/constants"
import {Main} from "./styleds/CreateTripStyled"
import { useProtectPage } from "../hooks/useProtectPage";

function FormAdm() {
    //navegacao
    useProtectPage();
    const navigate = useNavigate();
    const lastPage = () => {
        navigate(-1)
    }
    // hooks form
    const [form, onChange, clear] = useForm({
        "name": "",
        "planet": "",
        "date": "",
        "description": "",
        "durationInDays": "",
    })

    //Esse endpoint cria uma nova viagem.
    const createTrip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
       
        axios.post(`${BASE_URL}trips`, body,
        {headers:{
            auth:localStorage.getItem("token")
        }})
            .then((response) => { alert("Requisição realizada com SUCESSO!");console.log() })
            .catch((erro) => { console.log(erro) })
    }
        // acao formulario
        const onClickCreate = (event) => {
            event.preventDefault()
            createTrip()
            clear()
        }
        
        return (
            <Main>
                
                <h1> Nova viagem</h1>
                <form onSubmit={onClickCreate}>

                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        required
                        pattern={"^.{6,}"}
                    >
                    </input>

                    <label htmlFor="planet">Planeta:</label>
                    <select
                        id="planet"
                        type="select"
                        name="planet"
                        value={form.planet}
                        onChange={onChange}
                        placeholder="Planeta"
                        required
                    >
                        <option value="escolha">Escolha um Planeta</option>
                        <option value="Mercurio">Mercúrio</option>
                        <option value="Venus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Jupiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                    </select>

                    <label htmlFor="date">Data:</label>
                    <input
                        type="date"
                        min={"2023/01/01"}
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                        required
                    >
                    </input>

                    <label htmlFor="descricao">Descrição viagem:</label>
                    <input
                        type="text"
                        id="descricao"
                        name="description"
                        value={form.description}
                        onChange={onChange}
                        placeholder="Descrição"
                        required
                        pattern={"^.{30,}"}
                    >
                    </input>

                    <label htmlFor="durationInDays">Duração em dias:</label>
                    <input
                        type="number"
                        min={50}
                        id="durationInDays"
                        name="durationInDays"
                        value={form.durationInDays}
                        onChange={onChange}
                        placeholder="Duração viagem"
                        required
                    >
                    </input>
                    <div>
                    <button onClick={lastPage}>Voltar</button>
                    <button>Criar viagem</button>
                    </div>
                </form>

            </Main>
        )
}
export default FormAdm;