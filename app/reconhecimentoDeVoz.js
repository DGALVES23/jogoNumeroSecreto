const elementoChute = document.getElementById("chute")

const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
      const chute = evento.results[0][0].transcript
      exibeChuteNaTela(chute)
      verificaSeOChuteEValido(chute)     
}

function exibeChuteNaTela(chute) {
      elementoChute.innerHTML=`
      <div>Você disse </div>
      <span class="box">${chute}</span>`
      
}

recognition.addEventListener('end', () => recognition.start())