import styled from 'styled-components';
import { useState, useEffect} from 'react';

import { FiPlay } from "react-icons/fi";
import {GiReturnArrow} from "react-icons/gi";

function Flashcard( {index, flashcard} ) {
    //state
    const [virado, setVirado] = useState(flashcard.virado);
    const [verificado, setVerificado] = useState(flashcard.verificado);

    //render
    return (
        <> 
            {virado ? 
            <FlashCardVirado>
                <h5> {verificado ? flashcard.resposta : flashcard.pergunta} </h5>
                { verificado ? 
                <div>
                    <BotaoResposta corDeFundo="#FF3030">Não lembrei</BotaoResposta>
                    <BotaoResposta corDeFundo="#FF922E">Quase não lembrei</BotaoResposta>
                    <BotaoResposta corDeFundo="#2FBE34">Zap!</BotaoResposta>
                </div> 
                :
                <span onClick={() => setVerificado(true)}> <GiReturnArrow /> </span>
                }
            </FlashCardVirado>
            :
            <FlashCard key={index} onClick={ () => setVirado(true)}>
                <h5> Pergunta {index + 1} </h5>
                <FiPlay />
            </FlashCard>
            }        
        </>
        
    )
}

export default function TelaPartida() {
    //State
    const [flashcards, setFlashcards] = useState([]);

    function misturarFlashcards(flashcards) {
        const flashcardsEmbaralhados = [...flashcards]
        for (let i = flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [flashcardsEmbaralhados[i], flashcardsEmbaralhados[j]] = [flashcardsEmbaralhados[j], flashcardsEmbaralhados[i]];
        }
        return flashcardsEmbaralhados;
    }

    //logic
    useEffect( () => {
        setFlashcards( [
            {
                virado: false,
                pergunta: "O que é JSX?",
                resposta: "Uma extensão de linguagem do JavaScript",
                respondido: false,
                verificado: false
            },
            {
                virado: false,
                pergunta: "O React é __ ",
                resposta: "uma biblioteca JavaScript para construção de interfaces",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "Componentes devem iniciar com __",
                resposta: "letra maiúscula",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "Podemos colocar __ dentro do JSX",
                resposta: "expressões",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "O ReactDOM nos ajuda __",
                resposta: "interagindo com a DOM para colocar componentes React na mesma",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "Usamos o npm para __",
                resposta: "gerenciar os pacotes necessários e suas dependências",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "Usamos props para __",
                resposta: "passar diferentes informações para componentes",
                respondido: false,
                verificado: false 
            },
            {
                virado: false,
                pergunta: "Usamos estado (state) para __",
                resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
                respondido: false,
                verificado: false 
            }
        ])
    }, []);

    //console.log("Array original:")
    //console.log(flashcards)
    //console.log("Array embaralhado")
    //console.log(misturarFlashcards(flashcards))

    //render
    return (
        <>
            <Logo>
                <img src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1659312000&Signature=ZHoZi-XbTpZ4rTlCFu0I2YX1xoOD8UtYNOD-HHPmVsNJ6zoXO~D-tZAhZSuB1Zuipy9OozXqe31CRQ1MX1g4v2yyFF7mKH5PWQSwwZ-5IkNd0KHhxh4iAIMkvou8qj4NJV3bGZq2dOorlLekkkZsfu96iumbErNw8TL2lPh0BT9thmKtpxe9XFLpGfJvv1OKln0Lf6pC9sZ73AHSOx09VEZ1mY6VwppJM8YIoN3qkL7DQBcXwfavfE-NLPaQeIEuic5YWk3NP02c260KG0fI1B9f38QDzj~s8WpAfrpW3nO2Xz2ggwGlFUug3JMK4tlJuThWpEkwRP8hNHxoB~-NXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <h2>ZapRecall</h2>
            </Logo>
            <Deck>
                {misturarFlashcards(flashcards).map( (flashcard, index) => 
                     <Flashcard index={index} flashcard={flashcard}/>
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