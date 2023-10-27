"use strict"
 var produtos = [
    {nome: 'Macbook', preco: 8000, img: 'img/macbook.png', qtd: 0},
    {nome: 'GalaxyBook', preco: 4500.5, img: 'img/galaxybook.png', qtd: 0}
 ]


function criaProduto() {
    let lista = document.getElementById('listaprodutos')
    for (let i in produtos) {
        let item = document.createElement('div')
        item.innerHTML = `
        <div class="itens">
            <img src="${produtos[i].img}">
            <h2>${produtos[i].nome}</h2>
            <h4>${produtos[i].preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h4>
            <button onclick="window.location.href='prods/${produtos[i].nome}.html'">COMPRAR</button>
        </div>`
        lista.appendChild(item)
    }

}


