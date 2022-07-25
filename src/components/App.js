import { useState } from 'react';

import {Tela} from './styledApp';

import TelaInicial from './telaInicial/TelaInicial';
import TelaPartida from './telaPartida/TelaPartida';

export default function App(){
    //State
    const [partidaIniciada, setPartidaIniciada] = useState(false);

    //render
    return (
        <Tela>
            {partidaIniciada ? <TelaPartida /> : <TelaInicial setPartidaIniciada={setPartidaIniciada}/>}
        </Tela>
    )
}

