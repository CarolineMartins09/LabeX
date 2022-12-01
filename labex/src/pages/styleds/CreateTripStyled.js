import styled from "styled-components";


export const Main = styled.main`
   
    h1{
        text-align: center;
        margin-top: 5%;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 50%;
        height: 50%;
        margin-left: 25%;
        margin-top: 5vh;
        padding-bottom: 10vh;
        box-shadow: 0 0 2em blue;
        border-radius: 5px;
        border: none;
    }
    label{
        height: 5%;
        padding-top: 2%;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        text-align: center;
    }
    input{
        font-style: italic;
        margin-left: 1%;
        margin-right: 1%;
    }
    select{
        height: 5%;
        font-style: italic;
        margin-left: 1%;
        margin-right: 1%;
    }
    div{
        text-align: center;
    }
    button{
        margin-top: 4vh;
        padding-top: 1vh;
        padding-bottom: 1vh;
        font-weight: bold;
        font-family: Georgia, 'Times New Roman', Times, serif;
        box-shadow: 0 0 1em blue;
        border: none;
        margin-left: 5%;
        margin-right: 5%;
    }
    button:hover{
        background-color: lightskyblue;
        padding-top: 1vh;
        padding-bottom: 1vh;
        border: none;
    }
   
`
