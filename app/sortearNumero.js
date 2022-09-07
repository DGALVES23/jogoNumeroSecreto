const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerandoNumeroAleatorio()

//funcao para gerar o numero de forma aleatoria
function gerandoNumeroAleatorio() {
     return parseInt(Math.random() * maiorValor +1)      
}
console.log("Número Secreto: ",numeroSecreto);

//manipulando os valores de manor e maior
const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor