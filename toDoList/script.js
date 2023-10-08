"use strict"
var lista = []

function salvar() {  
    var descTarefas = {task: ''}
    let tarefa = document.querySelector('input#tarefa').value
    document.querySelector('input#tarefa').value = ''
    descTarefas.task = tarefa
    lista.push(descTarefas)
    mostrar()
    
}

function del(id) {
    lista.splice(id, 1)
    mostrar()
}

function mostrar() {
    let div = document.getElementById('listagem')
    div.innerHTML = ''
    for (let item in lista) {
        let linha = document.createElement('article')
        linha.innerHTML = `<p class="postit"><input class="novastarefas" type="text" id="tarefa${item}" value="${lista[item].task}"><button onclick="salvar(${item})">S</button> <button id="del" onclick="del(${item})">X</button></p>`
        div.appendChild(linha)
       
    }
}

//verifica se já existe algum item na lista para ser editado
if (lista.length > 0) {
    function salvar(id) {
        let novoconteudo = document.getElementById(`tarefa${id}`)
        lista[id].task = novoconteudo
    }
}
console.log(lista)
