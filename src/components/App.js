import { useState, useEffect } from 'react';

import {Tela} from './styledApp';

import TelaInicial from './telaInicial/TelaInicial';
import TelaPartida from './telaPartida/TelaPartida';

export default function App(){
    //State
    const [partidaIniciada, setPartidaIniciada] = useState(false);
    const [deck, setDeck] = useState("React");
    const [cardsDeck, setCardsDeck] = useState([]);

    //logic
    useEffect( () => {
        setCardsDeck([
            [
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
            ],
            [
                {
                    virado: false,
                    pergunta: "Qual casa Harry pertence?",
                    resposta: "Grifinória",
                    respondido: false,
                    verificado: false
                },
                {
                    virado: false,
                    pergunta: "Sirius Black é __ ",
                    resposta: "padrinho de Harry",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "Aqueles não nascidos bruxos são: __",
                    resposta: "trouxas",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "Hogwartz possui __ casas",
                    resposta: "quatro",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "O Avada Kedavra é uma das três __",
                    resposta: "Maldições imperdoáveis",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "O esporte praticado por harry é o __",
                    resposta: "quadribol",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "No dia da morte dos pais de harry parte de Valdemort __",
                    resposta: "ficou em Harry, tornando-o uma Horcrux",
                    respondido: false,
                    verificado: false 
                },
                {
                    virado: false,
                    pergunta: "O feitiço Ridiculus é usado para __",
                    resposta: "um feitiço de defesa contra bixo papão",
                    respondido: false,
                    verificado: false 
                }
            ]
        ]);
        
    }, []);

    //render
    return (
        <Tela>
            {partidaIniciada ? <TelaPartida deck={deck} cardsDeck={cardsDeck} /> : <TelaInicial setPartidaIniciada={setPartidaIniciada} deck={deck} setDeck={setDeck} />}
        </Tela>
    )
}

