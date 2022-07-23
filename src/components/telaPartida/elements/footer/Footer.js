import styled from 'styled-components';
import { useState, useEffect} from 'react';
import MensagemFinal from '../mensagemFinal/MensagemFinal';

export default function Footer({children, flashcards, perguntasConcluidas, iconesRespondidos}) {
    //state
    const [respostasCorretas, setRespostasCorretas] = useState(false);

    //logic
    useEffect( () => {
        if (iconesRespondidos.every( icone => icone.cor !== "#FF3030")) {
            setRespostasCorretas(true)
        } else {
            setRespostasCorretas(false) ;
        }
    }, [iconesRespondidos])


    //render
    return (
        <BarraInferior encerrado={flashcards.length === perguntasConcluidas}>
            {(perguntasConcluidas === flashcards.length) ? <MensagemFinal respostasCorretas={respostasCorretas}/> : ""}
            {children}
        </BarraInferior>
    )
}

const BarraInferior = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@400;700&display=swap');

    width: 100%;
    min-height: ${props => props.encerrado ? "171px" : "70px"};
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
    font-family: 'Recursive', sans-serif;

    span {
        font-family: 'Recursive', sans-serif;
        font-weight: 700;
        font-size: 18px;
        margin: 0;
    }

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

