import styled from 'styled-components';
import TelaInicial from './TelaInicial';

export default function App(){
    return (
        <Tela>
            <TelaInicial />

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
`;