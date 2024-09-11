function gerarnumeroaleatorio(){
    const numeroaleatorio = Math.floor(Math.random() * 11) 
    return numeroaleatorio
}

function jogar(){
    const peganumeroaleatorio = gerarnumeroaleatorio()
    console.log(peganumeroaleatorio)
    do{
        const palpite = prompt("Adivinhe o Número")
    }
    while()
}

jogar()