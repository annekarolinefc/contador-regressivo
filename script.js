function startTimer(duration, display){
    var timer = duration, minutes, seconds;

    setInterval(function(){
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
        }
    }, 1000);
}

//quando atualiza a página
window.onload = function(){
    //definindo os parametros
    var duration = 60*4; //conversao para segundos
    var display = document.querySelector("#timer"); //Elemento para exibir o timer

    //disparando a função
    startTimer(duration, display); //Inicia a função
}