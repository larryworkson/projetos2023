"use strict"

var run = true
function start(){
    run = true
    let tempo = document.getElementById('crono').value
    cronoSeg(tempo)
    cronoMile(tempo * 10)
}

function stop(){
    run = false
}

function cronoSeg(fim){
    let seg = document.querySelector('h1#iseg')
    let inicio = 1
    let intervaloSeg = setInterval(function(){        
        if (run == false){
            clearInterval(intervaloSeg)
        }
        else if (inicio == fim){
            clearInterval(intervaloSeg)
        }
        
        seg.innerText = inicio
        inicio++
    }, 1000)
}

function cronoMile(fim){
    let mil = document.querySelector('h2#imil')
    let inicio = 0
    let intervaloMil = setInterval(function(){        
        if (inicio == fim){
            clearInterval(intervaloMil)
        }
        else if (run == false) {
            clearInterval(intervaloMil)
        }
        mil.innerText = inicio
        inicio++
    }, 100)
}
