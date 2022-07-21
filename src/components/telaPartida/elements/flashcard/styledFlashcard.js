import styled from 'styled-components';

const FlashCard = styled.div`
width: 300px;
min-height: 65px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 15px;
box-shadow: 0px, 4px rgba(0, 0, 0, 0.15);
background-color: #FFFFFF;
border-radius: 5px;
color: ${props => props.corDoTexto};
scale: 0.8;
transition: all ease 0.4s;
text-decoration: ${props => props.finalizado ? "line-through" : "inherit"};


&:hover {
    scale: 0.9;
}

&:active {
    transform: translate3d(2px, 2px, -3px);
}

@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');

h5 {
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 19px;
}
`;

const FlashCardVirado = styled.div`
width:300px;
min-height: 131px;
box-shadow: 0px, 4px rgba(0, 0, 0, 0.15);
background-color: #FFFFFF;
border-radius: 5px;
color: #333333;
scale: 0.9;
transition: all ease 0.4s;
position: relative;
padding-top: 18px;
padding-left: 15px;
display: flex;
flex-direction: column;
align-items: center;

&:hover {
    scale: 0.95;
}

span {
    position: absolute;
    right: 6px;
    bottom: 5px;
    scale: 0.9;
}

span:hover {
    scale: 1
}

span:active {
    transform: translateY(1px);
}

@import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');

h5 {
    font-family: 'Recursive', sans-serif;
    font-weight: 400;
    font-size: 18px;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
}
`;

const BotaoResposta = styled.div`
width: 85px;
height: 38px;
display: flex;
color: #FFF;
border-radius: 5px;
background-color: ${props => props.corDeFundo};
margin: 0px 6px 8px 0px;
scale: 0.95;
transition: all ease 0.3s;
text-shadow: 1px rgba(0, 0, 0, 0.5);
cursor: pointer;

&:hover {
    scale: 1;
    opacity: 0.8;
    text-shadow: 1px rgba(0, 0, 0, 1);
}

&:active {
    transform: translate3d(1px, 1px, 1px);
}
`;

export {FlashCard, FlashCardVirado, BotaoResposta};