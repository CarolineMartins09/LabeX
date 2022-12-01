import styled from "styled-components";
import constelacao from "../imagens/pagLogin.jpg"


export const Main=styled.main`
    background-image: url(${constelacao});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 99vh;
    margin-top: -1%;
    margin-left: -1%;
    padding-top: 1px;
    font-family: Georgia, 'Times New Roman', Times, serif;
   


    form{
        display: flex;
        flex-direction: column;
        width: 35vw;
        padding-left: 50vh;
        padding-top: 5vh;
        margin-top: 25vh;
        background-color: white;
        margin-right: 20%;
        padding-right: 10%;
        margin-left: 25%;
        padding-left: 10%;
        padding-bottom: 5vh;
        margin-bottom: 10vh;
        color: black;
        opacity: 0.7;
        border-radius: 10px;
        text-align: center;
        


    }
    label{
        color: black;
        text-align: center;
        font-weight: bold;
    }
  
    div{
        text-align: center;
    
        button{
            background-color: black;
            font-weight: bold;
            color: white;
            border-radius: 10px;
            box-shadow: 0 0 1em blue;;
            margin-top: 2vh;
            margin-left: 1vh;
            padding: 1vh;
            padding-left: 2vh;
            padding-right: 2vh;
        }
        button:hover{
            background-color: lightskyblue;
            color: black;
            font-weight: bold;
        }
    }
   

`