import styled from 'styled-components';

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

const IconeInferior = styled.div`
    color: ${props => props.corIcone};
`;

export {Logo, Deck, IconeInferior};