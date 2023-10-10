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
        linha.innerHTML = `
        <p class="postit">
            <input class="novastarefas" type="text" id="tarefa${item}" value="${lista[item].task}">
            <button id="sal" onclick="editar(${item})">✓</button>
            <button id="del" onclick="del(${item})">X</button>
        </p>`
        div.appendChild(linha)
       
    }
}


function editar(id) {
    let novoconteudo = document.getElementById(`tarefa${id}`).value
    lista[id].task = novoconteudo
    mostrar()
}


function darkmode(){
    let mudarestilo = document.getElementById('mudarestilo')
    let postit = document.getElementsByClassName('postit')
    let txtpostit = document.getElementsByClassName('novastarefas')
    let txtinputaarefa = document.querySelector('input#tarefa')
    document.body.style.backgroundColor = 'rgb(65, 65, 65)'
    document.body.style.color = 'rgb(255, 255, 255)'
    txtinputaarefa.style.color = 'rgb(220, 220, 220)'
    mudarestilo.innerHTML = '<img onclick="lightmode()" src="https://static.vecteezy.com/system/resources/previews/009/266/750/original/sun-icon-design-free-png.png">'
    for (let v = 0; v < postit.length ; v++) {
        postit[v].style.backgroundColor = 'rgb(75, 75, 75)'
    }
    for (let c = 0 ; c < txtpostit.length ; c++){
        txtpostit[c].style.color = 'rgb(220, 220, 220)'
    }
    
}
function lightmode() {
    let mudarestilo = document.getElementById('mudarestilo')
    document.body.style.backgroundColor = 'rgb(255, 255, 255)'
    document.body.style.color = 'rgb(65, 65, 65)'
    mudarestilo.innerHTML = '<img onclick="darkmode()" src="https://cdn-icons-png.flaticon.com/512/4445/4445942.png">'
}