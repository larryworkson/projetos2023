
function start(){
    var tempo = document.getElementById('crono').value
    cronoSeg(tempo)
    cronoMile(tempo * 10)
}

function cronoSeg(fim){
    let seg = document.querySelector('h1#iseg')
    let inicio = 1
    let intervalo = setInterval(function(){
        seg.innerText = inicio
        inicio++
        if (inicio == fim){
            clearInterval(intervalo)
        }
    }, 1000)
}

function cronoMile(fim){
    let mil = document.querySelector('h2#imil')
    let inicio = 0
    let intervalId = setInterval(function(){
        mil.innerText = inicio
        inicio++
        if (inicio == fim + 1){
            clearInterval(intervalId)
        }
    }, 100)
}
