import { useState, useEffect} from 'react';

import { FiPlay } from "react-icons/fi";
import {GiReturnArrow} from "react-icons/gi";
import {VscError} from 'react-icons/vsc';
import {BsFillQuestionCircleFill, BsCheckCircleFill} from 'react-icons/bs';

import {FlashCard, FlashCardVirado, BotaoResposta} from './styledFlashcard';

export default function Flashcard( {index, flashcard, setPerguntasConcluidas, perguntasConcluidas, iconesRespondidos, setIconesRespondidos } ) {
    //state
    const [virado, setVirado] = useState(flashcard.virado);
    const [verificado, setVerificado] = useState(flashcard.verificado);
    const [botoesResposta, setBotoesResposta] = useState([]);
    const [resultadoCard, setResultadoCard] = useState("#333333");
    const [iconeCard, setIconeCard] = useState(<FiPlay />)

    //logic
    useEffect( () => {
        setBotoesResposta([
            {texto: "Não lembrei", cor: "#FF3030", icon: <VscError />},
            {texto: "Quase não lembrei", cor: "#FF922E", icon: <BsFillQuestionCircleFill />},
            {texto: "Zap!", cor: "#2FBE34", icon: <BsCheckCircleFill />},
        ])
    }, [])

    function finalizarRecallCard(botao, perguntasConcluidas) {
        setIconeCard(botao.icon);
        setResultadoCard(botao.cor);
        setVirado(false);
        setPerguntasConcluidas(perguntasConcluidas + 1);
        setIconesRespondidos([...iconesRespondidos, {icone: botao.icon, cor: botao.cor}]);
    }

    function virarCard() {
        if (!verificado) {
            setVirado(true)
        }
    }

    //render
    return (
        <> 
            {virado ? 
            <FlashCardVirado>
                <h5> {verificado ? flashcard.resposta : flashcard.pergunta} </h5>
                { verificado ? 
                <div>
                    {botoesResposta.map((botao, index) => <BotaoResposta key={index} corDeFundo={botao.cor} onClick={() => finalizarRecallCard(botao, perguntasConcluidas)}>{botao.texto}</BotaoResposta>)}
                </div> 
                :
                <span onClick={() => setVerificado(true)}> <GiReturnArrow /> </span>
                }
            </FlashCardVirado>
            :
            <FlashCard key={index} finalizado={verificado} onClick={ virarCard } corDoTexto={resultadoCard}>
                <h5 > Pergunta {index + 1} </h5>
                {iconeCard}
            </FlashCard>
            }        
        </>
        
    )
}

