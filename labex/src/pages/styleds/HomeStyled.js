import styled from "styled-components";
import SideralResp from "../imagens/sideral2.jpg"
import labex from "../imagens/gala.jpg"

export const Main = styled.main`
   background-image: url(${labex});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: 80%;
   padding-top: 1px;
   padding-left: 1px;
   width: 100vw;
   height: 99vh;
   margin-top: -1%;
   margin-left: -1%;
   

   @media (min-width:350px) and (max-width: 1140px){
    background-image: url(${SideralResp});
    background-size: cover;
   }
   `

export const Conteiner = styled.div`
    width: 50vw;
    height: 50vh;
    padding-left: 25%;
    align-items: center;
    
    
    div{
     margin-top: 25vh;
     background-color: white;
     opacity: 0.6;
     border-radius: 10px;
     align-items: center;
     text-align: center;
     font-family: Georgia, 'Times New Roman', Times, serif;

        
    }
    button{
     margin: 10%;
     width: 20%;
     border: 2px solid blue;
     background-color: black;
     color: white;
     opacity: 2.0;
     height: 6vh;
     border-radius: 10px;
     align-items: center;
     font-family: Georgia, 'Times New Roman', Times, serif
    }
    button:hover{
        background-color: blue;
        width: 30%;
    }
    
    h3{
        text-align: center;
        padding: 10px;
        color: black;
    }
    h4{
        text-align: center;
        color: black;
    }
@media (min-width: 350px)and (max-width: 1140px ){
    width: 60vw;
    height: 25vh;
    padding-left: 20%;


    div{
     margin: 1vh;
     margin-top: 15vh;
    }
    button{
     margin: 20%;
     width: 55%;
    }
    button:hover{
        background-color: blue;
        width: 65%;
    }
}

`