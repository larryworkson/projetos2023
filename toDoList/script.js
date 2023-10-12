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
            <section class="postit"> 
                <input class="novastarefas" type="text" id="tarefa${item}" value="${lista[item].task}">                                  
                <button id="sal" onclick="editar(${item})"><img src="img/save.svg"></button>
                <button id="check" class="check" onclick="check(${item})"><img src="img/check.svg"></button>
                <button id="del" onclick="del(${item})"><img src="img/x.svg"></button>
            </section>`
            div.appendChild(linha)
        
        }
        if (estilo) {
            lightmode()
        } else {
            darkmode()
        }
    }

    function editar(id) {
        let novoconteudo = document.getElementById(`tarefa${id}`).value
        lista[id].task = novoconteudo
        mostrar()
    }

    /* MARCANDO A TAREFA CONCLUIDA */
    var riscado = true
    function check(valor) {
        let selecTarefa = document.getElementById(`tarefa${valor}`)
        if (riscado) {
            selecTarefa.style.textDecoration = 'line-through'
            riscado = false

        } else {    
            selecTarefa.style.textDecoration = 'none'
            riscado = true
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
    }


