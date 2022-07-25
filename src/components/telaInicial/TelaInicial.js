import {LogoInicial, TextoLogo, BotaoIniciar} from "./styledTelaInicial";

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

