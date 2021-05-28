import styled from 'styled-components';
import Img from '../Images/img2.jpg';
import Img2 from '../Images/img1.png';

//Menu
export const Wrapper = styled.div`
    margin: 0;
    padding: 0;
    background-color:#0b0e94;
    height: 70px;
    width: 100%;
    text-align: center;
    /* box-shadow: 0px 2px 15px black; */
`;

export const MenuTitle = styled.h1`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin: 0;
    padding: 15px 0; 
`;

//Imagem de capa
export const Imagem = styled.img`
    background-image: url(${Img});
    background-position-y: 50%;
    width: 100%;
    height: 500px;
`;

//Título de pesquisa
export const SearchTitle = styled.h1`
    text-align: center;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    margin: 20px 0 0 0;
    padding: 15px 0; 
`;

//Form 
export const Forms = styled.form`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 1% 0 3% 6%;

    input {
        height: 40px;
        width: 50%;
        background-color: transparent;
        color: black;
        border-radius: 10px;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        /* box-shadow: 0px 2px 3px black; */

        :hover {
            cursor: pointer;
        }
    }

    input:placeholder-shown {
        padding-left: 2%;
    }

    input:focus {
        outline: 0;
    } 

    button {
        height: 45px;
        background-color: #1616ff;
        color: #ffffff;
        border-radius: 10px;
        width: 30%;
        margin-left: 20px;
        font-weight: 500 bold;
        border: 0.5px solid black;
        box-shadow: 1px 1px 1px black;

        :hover {
            cursor: pointer;
        }
    }
`;

//Cards
export const Card = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px 5px;
    padding: 10px 50px 20px 100px;
    text-align: center;
    margin: auto;

    @media (max-width: 1250px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 50px 10px;
        padding: 10px 50px 20px 100px;
        text-align: center;
        margin: auto;
    }

    @media (max-width: 950px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 60px 5px;
        padding: 10px 50px 20px 100px;
        text-align: center;
        margin: auto;
    }

    @media (max-width: 700px) {
        display: block;
        margin: 10%;
        text-align: center;
        margin: auto;
    }
`;

export const CardWrapper = styled.div`
    position: relative;
    align-items: center;
    border-radius: 25px;
    width: 250px;
    height: 350px;
    /* border: 1px solid black; */
    background-color:#0b0e94;

    @media (max-width: 700px) {
        margin: 10%;
        padding-top: 2%;
    }

    h1 {
        font-weight: 500;
        color: white;
    }

    img {
        height: 140px;
        width: 140px;
        border-radius: 100%;
        border: 2px solid white;
    }

    h2 {
        font-weight: 500;
        color: white;
    }

    div {
        display: flex;
        width: 100%;
        text-align: center;
        margin: 20px 0;

        .b1, .b2 {
            height: 50px;
            width: 130px;
            background-color: #1616ff;
            color: #ffffff;
            /* border: 1px solid black;
            box-shadow: 1px 1px 3px black;   */

            :hover {
                cursor: pointer;
            }          
        }

        .b1 {
            border-radius: 0 0 0 25px;
        }

        .b2 {
            border-radius: 0 0 25px 0;
        }
    }
`;