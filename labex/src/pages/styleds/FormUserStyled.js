import styled from "styled-components";
import astronauta from "../imagens/astronauta.jpg"


export const Main=styled.main`
    background-image: url(${astronauta});
    background-size: cover;
    text-align: center;
    padding-bottom: 8%;
    width: 100vw;
    height: 100%;
    margin-top: -2%;
    margin-left: -2%;


    @media screen and (min-width: 350px)and (max-width: 800px){
        background-position: 50%;
    }

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60%;
    margin-left: 10%;
    margin-top: 5%;
    padding-bottom: 1%;
    box-shadow: 0 0 2em blue;
    border-radius: 5%;
    
    label{
        text-align: left;
        color: white;
        height: 15%;
        padding-top: 4vh;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        margin-left: 2%;
        margin-right: 2%;
    }
    input{
        height: 50%;
        font-style: italic;
        border: none;
        padding-left: 10%;
        margin-left: 2%;
        margin-right: 2%;
        border-radius: 10px;
       
    }
    select{
        height: 5vh;
        font-style: italic;
        border: none;
        margin-left: 2%;
        margin-right: 2%;
        border-radius: 10px;
    }
    button{
        margin-top: 4%;
        padding-top: 2%;
        padding-bottom: 1%;
        margin-left: 2%;
        margin-right: 2%;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        box-shadow: 0 0 1em blue;
        border: none;
        align-items: center;
    }
    button:hover{
        background-color: lightskyblue;
        border: none;
    }
`

export const Header = styled.header`
    text-align: center;
    margin-top: 0;
    padding-top: 2%;

    h1{
        color: white;
    }

    button{
       width: 10%;
       height: 5vh;
       font-family: Georgia, 'Times New Roman', Times, serif;
       border: lightsteelblue;
       border-radius: 10px;
    }
    
    button:hover{
        background-color: lightskyblue;
    }

    @media screen and (min-width: 350px)and (max-width: 800px){
        button{
            width: 25%;
        }
       
    }
`