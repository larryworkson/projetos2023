"use strict"

var run = true

function mudarBtn(){
    let btnStart = document.getElementById('btniniciar')
    btnStart.innerHTML = '<button id="stop" onclick="stop()">PARAR</button>'
}

function start(){
    run = true
    mudarBtn()
    let tempo = document.getElementById('crono').value
    cronoSeg(tempo)
    cronoMile(tempo * 10)
}

function stop(){
    run = false
    let btnStop = document.getElementById('btniniciar')
    btnStop.innerHTML = '<button onclick="start()" >INICIAR</button>'
    
}

function zerar() {    
    let seg = document.querySelector('h1#iseg')
    let mil = document.querySelector('h2#imil')
    seg.innerText = '0'
    mil.innerText = '0'
    stop()
    document.getElementById('crono').value = ''
    
}


function cronoSeg(fim){
    let seg = document.querySelector('h1#iseg')
    let inicio = 1
    let intervaloSeg = setInterval(function(){        
        if (run == false){
            clearInterval(intervaloSeg)
            stop()
        }
        else if (inicio == fim){
            clearInterval(intervaloSeg)
            stop()
        }
        
        seg.innerText = inicio
        inicio++
    }, 1000)
}

function cronoMile(fim){
    let mil = document.querySelector('h2#imil')
    let inicio = 0
    let intervaloMil = setInterval(function(){  
        inicio++      
        if (inicio == fim){
            clearInterval(intervaloMil)
            stop()
        }
        else if (run == false) {
            clearInterval(intervaloMil)
            stop()
        }
        mil.innerText = inicio
        
    }, 100)
}

let crono = {hr: 0, min: 0, seg: 0}
function cronoStart() {
    
    /* a cada segundo um número é adicionado na lista crono */
    let final = document.getElementById('crono').value
    let show = document.getElementById('cronolista')
    let inicio = 0
    let parada = setInterval(function(){
        
        if (inicio == final){
            clearInterval(parada)
        }
        else if (run == false) {
            clearInterval(parada)
        }
        crono.seg = inicio
        inicio++
    }, 1000)
    show.innerText = `00:00:${inicio}`


}