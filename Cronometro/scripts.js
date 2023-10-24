"use strict"
//define o objeto que recebe o cronometro. Note que ele é uma var, portanto está em um escopo global para ser utilizado por qualquer função.
var crono = {hr: 0, min: 0, seg: 0, mil: 0}

//esta variável é utilizada para verificar se o cronometro está ativo.
var rodando = false

//puxa o elemento H1 para mostrar nele o cronometro. Também escopo global.
var mostraCrono = document.getElementById('crono')

//função que inicia a contagem.
function startCrono(){
    rodando = true
    mudarBtn()
    //está função interna do JS cria um intervalo de tempo para rodar o que está neste bloco.
    let intervaloMilesimo = setInterval(function() {
        if (rodando == false){ //verifica se o cronometro foi pausado para interromper a contagem
            clearInterval(intervaloMilesimo)
            stopCrono()
        }
        
        if (crono.mil == 10) {
            crono.mil = 0
            crono.seg++
        }
        if (crono.seg == 60) { //ao atingir 60 segundos, acrescenta 1 min.
            crono.seg = 0
            crono.min++
        }
        else if (crono.min == 60){ //ao atingir 60 minutos, acrescenta 1 hora.
            crono.min = 0
            crono.min++
            crono.hr++
        }
        //mostra a lista atualizada no html. Usei as funções toString e padStart para formatar os valores menores que 10 com um zero à esquerda.        
        mostraCrono.innerText = `${crono.hr.toString().padStart(2, '0')}:${crono.min.toString().padStart(2, '0')}:${crono.seg.toString().padStart(2, '0')}:${crono.mil.toString().padStart(2, '0')}`
                                 
        crono.mil++
    }, 100)

}


function mudarBtn(){
    //esta função muda o botão INICIAR pelo PAUSAR, evitando que o usuário clique novamente no botão iniciar.
    let btnStart = document.getElementById('btniniciar')
    btnStart.innerHTML = '<button id="pausar" onclick="stopCrono()">PAUSAR</button>'
}
function stopCrono(){
    //esta função pausa a contagem e troca o botão PAUSAR pelo INICIAR
    rodando = false
    let btnStop = document.getElementById('btniniciar')
    btnStop.innerHTML = '<button onclick="startCrono()">START</button>'

}

function zerarCrono(){
    //esta função zera todas as propriedades do objeto CRONO
    crono.seg = 0
    crono.min = 0
    crono.hr = 0
    mostraCrono.innerText = `${crono.hr.toString().padStart(2, '0')}:${crono.min.toString().padStart(2, '0')}:${crono.seg.toString().padStart(2, '0')}`
}
