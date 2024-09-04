let numero1 = parseFloat(prompt('Digite um numero'))
let numero2 = parseFloat(prompt('Digite outro numero'))
let media = (numero1 + numero2) / 2

console.log('A media é  ' + Math.round(media) + '   Arredondado para cima:  ' + Math.ceil(media) + '   Arredondado para baixo:  ' + Math.floor(media))