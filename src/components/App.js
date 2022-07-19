import styled from 'styled-components';
import { useState } from 'react';

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

const Tela = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow-y: scroll;
`;