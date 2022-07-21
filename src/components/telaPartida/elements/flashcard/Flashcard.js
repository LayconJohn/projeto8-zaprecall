import { useState, useEffect} from 'react';

import { FiPlay } from "react-icons/fi";
import {GiReturnArrow} from "react-icons/gi";

import {FlashCard, FlashCardVirado, BotaoResposta} from './styledFlashcard';

export default function Flashcard( {index, flashcard} ) {
    //state
    const [virado, setVirado] = useState(flashcard.virado);
    const [verificado, setVerificado] = useState(flashcard.verificado);

    //logic
    function finalizarRecallCard() {
        console.log()
        setVerificado(false);
    }

    //render
    return (
        <> 
            {virado ? 
            <FlashCardVirado>
                <h5> {verificado ? flashcard.resposta : flashcard.pergunta} </h5>
                { verificado ? 
                <div>
                    <BotaoResposta corDeFundo="#FF3030" onClick={finalizarRecallCard}>Não lembrei</BotaoResposta>
                    <BotaoResposta corDeFundo="#FF922E" onClick={finalizarRecallCard}>Quase não lembrei</BotaoResposta>
                    <BotaoResposta corDeFundo="#2FBE34" onClick={finalizarRecallCard}>Zap!</BotaoResposta>
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

