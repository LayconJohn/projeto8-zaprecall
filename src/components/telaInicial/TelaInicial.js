import styled from 'styled-components';

export default function TelaInicial( { setPartidaIniciada } ) {

    //render
    return(
        <>
            <LogoInicial src="https://s3-alpha-sig.figma.com/img/e6be/467f/fb389e27e5843720979bbb7f3e94e660?Expires=1659312000&Signature=ZHoZi-XbTpZ4rTlCFu0I2YX1xoOD8UtYNOD-HHPmVsNJ6zoXO~D-tZAhZSuB1Zuipy9OozXqe31CRQ1MX1g4v2yyFF7mKH5PWQSwwZ-5IkNd0KHhxh4iAIMkvou8qj4NJV3bGZq2dOorlLekkkZsfu96iumbErNw8TL2lPh0BT9thmKtpxe9XFLpGfJvv1OKln0Lf6pC9sZ73AHSOx09VEZ1mY6VwppJM8YIoN3qkL7DQBcXwfavfE-NLPaQeIEuic5YWk3NP02c260KG0fI1B9f38QDzj~s8WpAfrpW3nO2Xz2ggwGlFUug3JMK4tlJuThWpEkwRP8hNHxoB~-NXQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <TextoLogo>ZapRecall</TextoLogo>
            <BotaoIniciar onClick={ () => setPartidaIniciada(true) }>Iniciar Recall!</BotaoIniciar>
        </>
    )
}

const LogoInicial = styled.img`
    width: 136px;
    height: 161px;
`;

const TextoLogo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');

    font-family: 'Righteous', cursive;
    font-size: 36px;
    font-weight: bold;
    color: #FFFFFF;
`;

const BotaoIniciar = styled.div `
    width: 246px;
    height: 56px;
    background-color: #FFFFFF;
    color: #D70900;
    border: 1px solid #D70900;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    scale: 0.9;
    transition: all ease 0.5s;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: translateY(2px);
    }

`;