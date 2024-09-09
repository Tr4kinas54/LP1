function calcular(){
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);
    const numero4 = parseInt(document.getElementById("numero4").value);
    const resultado = document.getElementById("resultado")
    const htmlNumeroAleatorio = document.getElementById(numeroAleatorio)

    let minino = Math.min(numero1, numero2, numero3, numero4)
    let maximo = Math.max(numero1, numero2, numero3, numero4)
    const numeroAleatorio = Math.floor(Math.random() * 101) + 1

    resultado.innerText = `O minimo é ${minimo} e o máximo é ${maximo}`
    htmlNumeroAleatorio.innerText = `O número gerado é ${numeroAleatorio}`
} 
