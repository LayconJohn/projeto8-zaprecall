import { useState, useEffect} from 'react';

import {Logo, Deck, IconeInferior} from './styledTelaPartida';

import Flashcard from './elements/flashcard/Flashcard';
import Footer from './elements/footer/Footer';



export default function TelaPartida( {deck, cardsDeck}) {
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
        console.log(deck);

        if (deck === "React") {
            setFlashcards(cardsDeck[0]);
        } else if (deck === "Harry Potter") {
            setFlashcards(cardsDeck[1]);
        }
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
            <Footer perguntasConcluidas={perguntasConcluidas} flashcards={flashcards} iconesRespondidos={iconesRespondidos}>
                
                <h6> {`${perguntasConcluidas} de ${flashcards.length}`} concluídos </h6>
                <div>{iconesRespondidos.map(icone => <IconeInferior corIcone={icone.cor}>{icone.icone}</IconeInferior>)}</div>
            </Footer>
        </>
    )
}

