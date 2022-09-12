function startTimer(duration, display) {

      var timer = duration, minutes, seconds;
       
      intervalo = setInterval(function () {

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {                  
                  StopTimer()
                  gameOver()
            }
                                 
      }, 1000)
}

function StopTimer() {
      console.log("contador chegou a 0");
      clearInterval(intervalo)           
           
}

function gameOver() {
      document.body.innerHTML = `
      <h2 class="gameOver"> Game Over</h2>
      <h3> Pressione o botão para jogar novamente </h3>
      <button id="jogarNovamente" class="jogarNovamente"> Iniciar</button>
      `
      document.body.style.background = "black";
      recognition.stop()
      
}

window.onload = function () {
      var duration = 60 * 1;
      var display = document.querySelector("#tempoRestante")
      
      startTimer(duration,display);
}