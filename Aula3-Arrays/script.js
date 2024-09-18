const nomes = ['Voce vai morrer', 'Vai ficar rico', 'Vai ser pobre', 'Vai ficar famoso']

function gerarAleatorio(){
    const numeroAleatorio = Math.floor(Math.random() * 4)
    return numeroAleatorio
}

function sortearNome(){
    let numeroAleatorio = gerarAleatorio()
    alert(nomes[numeroAleatorio])
}