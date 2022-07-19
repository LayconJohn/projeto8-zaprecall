import styled from 'styled-components';
import { useState, useEffect} from 'react';

import { FiPlay } from "react-icons/fi";

function Flashcard( {index} ) {
    return (
        <FlashCard key={index}>
            <h5> Pergunta {index + 1} </h5>
            <FiPlay />
        </FlashCard>
    )
}

export default function TelaPartida() {
    //State
    const [flashcards, setFlashcards] = useState([]);

    //logic
    useEffect( () => {
        setFlashcards( [
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            },
            {
                virado: false,
                pergunta: "",
                resposta: "",
                respondido: false, 
            }
        ])
    }, []);


    //render
    return (
        <>
            <Logo>
                <img src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1659312000&Signature=ZHoZi-XbTpZ4rTlCFu0I2YX1xoOD8UtYNOD-HHPmVsNJ6zoXO~D-tZAhZSuB1Zuipy9OozXqe31CRQ1MX1g4v2yyFF7mKH5PWQSwwZ-5IkNd0KHhxh4iAIMkvou8qj4NJV3bGZq2dOorlLekkkZsfu96iumbErNw8TL2lPh0BT9thmKtpxe9XFLpGfJvv1OKln0Lf6pC9sZ73AHSOx09VEZ1mY6VwppJM8YIoN3qkL7DQBcXwfavfE-NLPaQeIEuic5YWk3NP02c260KG0fI1B9f38QDzj~s8WpAfrpW3nO2Xz2ggwGlFUug3JMK4tlJuThWpEkwRP8hNHxoB~-NXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <h2>ZapRecall</h2>
            </Logo>
            <Deck>
                {flashcards.map( (flashcard, index) => 
                     <Flashcard index={index}/>
                )}
            </Deck>
            <BarraInferior>
                <h6> 0/4 concluídos </h6>
            </BarraInferior>
        </>
    )
}

const Logo = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 48px;

    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');


    img {
        width: 52px;
        height: 60px;
    }

    h2 {
        font-family: 'Righteous', cursive;
        font-size: 36px;
        font-weight: bold;
        color: #FFFFFF;
    }
`;

const Deck = styled.div`
    margin: 170px auto 120px auto;
    overflow-y: scroll;
`;

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
    color: #333333;
    scale: 0.8;
    transition: all ease 0.4s;

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

const BarraInferior = styled.div`
    width: 100%;
    min-height: 70px;
    background-color: #FFF;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 130px;
    z-index: 1;

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');

    h6 {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
    }
`;