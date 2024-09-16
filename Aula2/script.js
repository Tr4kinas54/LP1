function gerarnumeroaleatorio(){
    const numeroaleatorio = Math.floor(Math.random() * 11) 
    return numeroaleatorio
}

function jogar(){
    const numero = gerarnumeroaleatorio()
    let palpite = ""  
    let tentaivas = 3   
    do{
        console.log(numero)
        palpite = parseInt(prompt('Adivinhe o número'))
        if(numero != palpite){
            tentaivas--
            alert(`Ererou ! genta de nivo! Voced ainda tem ${tentaivas > 1? "tentativas": "tentaticva"}.`)
        }else{
            alert(`ParabenS  O NUMER O ERA :${numero}`)
            return
        }
    }while(tentaivas > 0)
        alert(`Parabens ! o NUmer jeran: ${numero}`)
    
}
jogar()