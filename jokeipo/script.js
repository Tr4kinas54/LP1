function escolhaOponente(){
    const jokenpo = ["pedra", "papel", "tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokenpo.length)
    return jokenpo[numeroAleatorio]
}

function escolhaJogador(botaoClicado) {
    return botaoClicado
}

function jogar(){
    const jogadaPC = escolhaOponente()
    const escolhaUsuario = escolhaJogador(botaoClicado)

    if(jogadaPC === escolhaUsuario){
        alert("Empatei")
    }
    else if(
        (jogadaPC === "Pedra" && escolhaUsuario === "Papel") ||
        (jogadaPC === "Papel" && escolhaUsuario === "Tesoura") ||
        (jogadaPC === "Tesoura" && escolhaUsuario === "Pedra")
    ) {

    }
}


escolhaJogador()