import styled from "styled-components";

export const Main = styled.main`
    text-align: center;
    margin-top: 5%;
    font-family: Georgia, 'Times New Roman', Times, serif;


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

export const Card = styled.section`
    border: 2px solid lightskyblue;
    border-radius: 10px;
    margin-left: 22%;
    margin-right: 22%;
    margin-top: 2%;

    button{
        margin-bottom: 2%; 
    }


`