import styled from 'styled-components';
import { useState, useEffect} from 'react';
import Flashcard from './elements/flashcard/Flashcard';

export default function TelaPartida() {
    //State
    const [flashcards, setFlashcards] = useState([]);
    const [perguntasConcluidas, setPerguntasConcluidas] = useState(0);
    const [iconesRespondidos, setIconesRespondidos] = useState([]);

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

    //render
    return (
        <>
            <Logo>
                <img src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1659312000&Signature=ZHoZi-XbTpZ4rTlCFu0I2YX1xoOD8UtYNOD-HHPmVsNJ6zoXO~D-tZAhZSuB1Zuipy9OozXqe31CRQ1MX1g4v2yyFF7mKH5PWQSwwZ-5IkNd0KHhxh4iAIMkvou8qj4NJV3bGZq2dOorlLekkkZsfu96iumbErNw8TL2lPh0BT9thmKtpxe9XFLpGfJvv1OKln0Lf6pC9sZ73AHSOx09VEZ1mY6VwppJM8YIoN3qkL7DQBcXwfavfE-NLPaQeIEuic5YWk3NP02c260KG0fI1B9f38QDzj~s8WpAfrpW3nO2Xz2ggwGlFUug3JMK4tlJuThWpEkwRP8hNHxoB~-NXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <h2>ZapRecall</h2>
            </Logo>
            <Deck>
                {misturarFlashcards(flashcards).map( (flashcard, index) => 
                     <Flashcard 
                        index={index} 
                        flashcard={flashcard}
                        setPerguntasConcluidas={setPerguntasConcluidas}
                        perguntasConcluidas={perguntasConcluidas}
                        iconesRespondidos={iconesRespondidos}
                        setIconesRespondidos={setIconesRespondidos}
                    />
                )}
            </Deck>
            <BarraInferior>
                <h6> {`${perguntasConcluidas} de ${flashcards.length}`} concluídos </h6>
                <div>{iconesRespondidos.map(icone => <IconeInferior corIcone={icone.cor}>{icone.icone}</IconeInferior>)}</div>
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



const BarraInferior = styled.div`
    width: 100%;
    min-height: 70px;
    background-color: #FFF;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 130px;
    z-index: 1;
    padding-bottom: 10px;

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');

    h6 {
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        font-size: 18px;
        margin: 0;
    }

    div {
        display: flex;
    }
`;

const IconeInferior = styled.div`
    color: ${props => props.corIcone};
`;