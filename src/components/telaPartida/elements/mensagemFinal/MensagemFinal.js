

export default function MensagemFinal({respostasCorretas}) {
    return (
        <>
              <span>{respostasCorretas ? "🥳" : "😥"}  {respostasCorretas ? "Parabéns!" : "Putz..."} </span> <br />
            <h6>{respostasCorretas ? "Você não esqueceu de nenhum flashcard!" : "Ainda faltam alguns...\nMas não desanime!"}</h6>
        </>
    )
}