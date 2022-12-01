import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useForm } from "../hooks/useForms"
import { BASE_URL } from "../constants/constants"
import { Main, } from "./styleds/LoginStyled"
import { useProtectPage } from "../hooks/useProtectPage";

function LoginAdm() {
    //navegação
    useProtectPage();
    const navigate = useNavigate();
    const login = () => {
        navigate("/login/adm")
    }
    const lastPage = () => {
        navigate(-1)
    }
    // API para acesso ao administrativo
    const [body, onChange, clear] = useForm({ email: "", password: "", })

    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}login`, body).then((response) => {
            console.log(response.data);
            login()
            localStorage.setItem("token",response.data.token) })
            .catch((erro) => { console.log("deu erro"); alert("Acesso invalido!") })

        clear();
    }


    //ACESSO:
    //EMAIL: caroline-martins-barros@astrodev.com
    //SENHA: 123456

    return (

        <Main>
            <form onSubmit={fazerLogin}>
            <h3>Área Administrativa</h3>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    placeholder="E-mail"
                    value={body.email}
                    onChange={onChange}
                    required
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

                />
                <label htmlFor="password">Senha:</label>
                <input
                    id="password"
                    name="password"
                    placeholder="Senha"
                    value={body.password}
                    onChange={onChange}
                    required
                    type="password"
                    pattern="^.{6}"
                />
                <div>
                    <button onClick={lastPage}>Voltar</button>
                    <button >Login</button>
                </div>
            </form>

        </Main>
    )
}

export default LoginAdm;