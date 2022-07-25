import styled from 'styled-components';

const LogoInicial = styled.img`
    width: 136px;
    height: 161px;
`;

const TextoLogo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: bold;
    color: #FFFFFF;
`;

const BotaoIniciar = styled.div `
    width: 246px;
    height: 56px;
    background-color: #FFFFFF;
    color: #D70900;
    border: 1px solid #D70900;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    scale: 0.9;
    transition: all ease 0.5s;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: translateY(2px);
    }

`;

export {LogoInicial, TextoLogo, BotaoIniciar};