// funcao para validar o numero
function verificaSeOChuteEValido(chute) {
      const numero  = +chute
      
      if (chuteForInvalido(numero)) {
            elementoChute.innerHTML += '<div style="color:red;">Valor Inválido</div>'
            return
      }

      if (numeroForMaiorQueOValorPermitido(numero)) {
            elementoChute.innerHTML += `<div style="color:red;">Valor fora do escopo, deve estar entre ${menorValor} e ${maiorValor}</div>`
            return
      } else if (numero > numeroSecreto) {
            elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`            
      }else{
            elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`            
      }

      if (numero === numeroSecreto) {
            StopTimer()
            document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            <button id="jogarNovamente" class="jogarNovamente"> Iniciar </button>
            `           
      }
}

function chuteForInvalido(numero) {
      return Number.isNaN(numero);
}

function numeroForMaiorQueOValorPermitido(numero) {
      return numero > maiorValor || numero < menorValor
      
} 

document.body.addEventListener('click', e =>{
      if (e.target.id ==  'jogarNovamente') {
            window.location.reload()
            
      }
})
