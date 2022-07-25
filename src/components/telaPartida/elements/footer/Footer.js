import { useState, useEffect} from 'react';
import MensagemFinal from '../mensagemFinal/MensagemFinal';

import { BarraInferior } from './styledFooter';

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


