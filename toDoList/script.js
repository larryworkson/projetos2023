"use strict"
var lista = []

//função para salvar um item na lista
    function salvar() {     
        let descTarefas = {task: '', marcado: false}     
        let tarefa = document.querySelector('input#tarefa').value
        document.querySelector('input#tarefa').value = ''
        descTarefas.task = tarefa
        lista.push(descTarefas)
        mostrar()        
    }

//função para editar um item da lista
function editar(id) {
    let novoconteudo = document.getElementById(`tarefa${id}`).value
    lista[id].task = novoconteudo
    mostrar()
}

//função para deletar um item da lista
    function del(id) {
        lista.splice(id, 1)
        mostrar()
    }

//botão oculto para SALVAR edições na tarefa
function showSave(p) {
    let btnsal = document.getElementById(`sal${p}`)
    btnsal.style.display = 'inline'
}

//função para mostrar a lista completa
function mostrar() {
    let div = document.getElementById('listagem')
    div.innerHTML = ''
    for (let item in lista) {
        let linha = document.createElement('article')
        linha.innerHTML = `
        <section class="postit" id="postit${item}"> 
            <input class="novastarefas" type="text" id="tarefa${item}" onmousedown="showSave(${item})" value="${lista[item].task}">                                  
            <button id="sal${item}" class="sal" onclick="editar(${item})"><img src="img/save.svg"></button>
            <button id="check" class="check" onclick="check(${item})"><img id="imgcheck${item}" src="img/check-blank.svg"></button>
            <button id="del" onclick="del(${item})"><img src="img/x.svg"></button>
        </section>`        
        div.appendChild(linha)
        tarefaMarcada(item)
    }
}

/* MARCANDO A TAREFA CONCLUIDA */
/* muda a formatação e o objeto 'marcado' */
function check(valor) {
    if (lista[valor].marcado == false) {
        lista[valor].marcado = true
        tarefaMarcada(valor)
    } else {
        lista[valor].marcado = false
        tarefaMarcada(valor)
    }
} 

/* CONFIGURAÇÃO DARKMODE */
var estilo = true
var mudarestilo = document.getElementById('mudarestilo')
var postit = document.getElementsByClassName('postit')
var txtpostit = document.getElementsByClassName('novastarefas')
var txtinputaarefa = document.querySelector('input#tarefa')
var header = document.getElementById('cabeca')

function darkmode(){   
    estilo = false
    header.style.backgroundColor = 'rgb(30, 30, 30)'
    document.body.style.backgroundColor = 'rgb(25, 25, 25)'
    document.body.style.color = 'rgb(255, 255, 255)'
    txtinputaarefa.style.color = 'rgb(220, 220, 220)'
    mudarestilo.innerHTML = '<img onclick="lightmode()" src="img/sun.svg">'
    for (let v = 0; v < postit.length ; v++) {
        postit[v].style.backgroundColor = 'rgb(35, 35, 35)'
    }
    for (let c = 0 ; c < txtpostit.length ; c++){
        txtpostit[c].style.color = 'rgb(220, 220, 220)'
    }
    // formata os itens da lista marcados
    for (let pu in lista) {
        tarefaMarcada(pu)
    }
    
}
function lightmode() {
    estilo = true
    header.style.backgroundColor = 'rgb(255, 255, 255)'
    document.body.style.backgroundColor = 'rgb(255, 255, 255)'
    document.body.style.color = 'rgb(65, 65, 65)'
    txtinputaarefa.style.color = 'rgb(65,65,65)'
    mudarestilo.innerHTML = '<img onclick="darkmode()" src="img/moon.svg">'
    for (let v = 0; v < postit.length ; v++) {
        postit[v].style.backgroundColor = 'rgb(254, 254, 254)'
    }
    for (let c = 0 ; c < txtpostit.length ; c++){
        txtpostit[c].style.color = 'rgb(124, 124, 124)'
    }
    // formata os itens da lista marcados
    for (let u in lista) {
        tarefaMarcada(u)
    }
}

function tarefaMarcada(param) {
    let selecTarefa = document.getElementById(`tarefa${param}`)
    let imgcheck = document.getElementById(`imgcheck${param}`)
    let postitCheck = document.getElementById(`postit${param}`)
    if (lista[param].marcado == true) {
        selecTarefa.style.textDecoration = 'line-through'
        imgcheck.src = 'img/check.svg'
        //chenado se darkmode está ativo
        if (estilo) {
            postitCheck.style.backgroundColor = 'rgb(234, 255, 234)'
        } else {
            postitCheck.style.backgroundColor = 'rgb(25, 65, 25)'
        }
    } else {    
        selecTarefa.style.textDecoration = 'none'
        imgcheck.src = 'img/check-blank.svg'
        //chenado se darkmode está ativo
        if (estilo) {
            postitCheck.style.backgroundColor = 'rgb(254, 254, 254)'
        } else {
            postitCheck.style.backgroundColor = 'rgb(35, 35, 35)'
        }
        
    } 
}

