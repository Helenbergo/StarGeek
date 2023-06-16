var listaFilmesStar = []

listaFilmesStar = JSON.parse(localStorage.getItem('bdfilmesStar'))

if (listaFilmesStar == null) {
    listaFilmesStar = []
}

exibirFilmes()

console.log(listaFilmesStar)

function validar(filme, imagem) {
    if (filme != '' && imagem != '') {
        return true
    } else {
        return false
    }
}

function NovoFilme() {

    var filme = document.getElementById('nomeFilme').value
    var imagem = document.getElementById('linkImg').value

    var possoCadastrar = validar(filme, imagem)
    if (possoCadastrar == false) {
        alert('Ops! Algo deu errado. Verifique os dados.')
        return
    } else {
        alert('Obra cadastrada com sucesso!')
        location.href = 'minha-lista.html'
    }

    var filmes = {
        nome: filme,
        imagens: imagem
    }

    listaFilmesStar.push(filmes)
    localStorage.setItem('bdfilmesStar', JSON.stringify(listaFilmesStar))

    exibirFilmes()
    
    document.getElementById('nomeFilme').value = ''
    document.getElementById('linkImg').value = ''
    document.getElementById('nomeFilme').focus()
    document.getElementById('nomeFilme').src = ''
}

function exibirFoto() {
    var imagem = document.getElementById('linkImg').value
    document.getElementById('foto').src = imagem
}

function exibirFilmes() {
    document.getElementById('filmesCadastrado').innerHTML = ""

    listaFilmesStar.forEach ( (item, indice) => {
        document.getElementById('filmesCadastrado').innerHTML +=
         `<div class= "div">
         <img src="${item.imagens}" width= "300px" height= "190px">
         <img src='/img/excluir.svg' class='exluir' onclick='excluirFilme(${indice})'>
         </div></br>`
    } )
}

function excluirFilme(indice) {
    listaFilmesStar.splice (indice, 1)
    localStorage.setItem( 'bdfilmesStar', JSON.stringify(listaFilmesStar) )
    exibirFilmes()
}

function Excluir() {
    listaFilmesStar = []
    localStorage.setItem( 'bdfilmesStar', JSON.stringify(listaFilmesStar) )
    exibirFilmes()
}