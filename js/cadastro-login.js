var usuarios = []
usuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
    if (usuarios == null) {
        usuarios = []
    }

    exibirUsuarios()

function validar(nome, email, senha, confirmarSenha) {
    if (nome != '' && email != '' && senha != '' && confirmarSenha != '') {
        return true
    } else {
        return false
    }
}

function Entrar() {
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value 
    var confirmarSenha = document.getElementById('confSenha').value

    if (senha != confirmarSenha) {
        alert ('Algo deu errado! Verifique suas senhas')
        return
    }

    var possoCadastrar = validar(nome, email, senha, confirmarSenha) 
    if (possoCadastrar == false) {
        alert ('Verifique se há espaços em branco')
        return
    } else {
        alert ('Usuário cadastrado!')
        location.href = 'login.html'
    }

    var dadosUsuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    usuarios.push(dadosUsuario)
    localStorage.setItem( 'bdUsuarios', JSON.stringify(usuarios) )

    exibirUsuarios()

    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('confirmarSenha').value = ''
    document.getElementById('nome').focus()
}

function EntrarLogin() {
    var emailLogin = document.getElementById('emailLogin').value 
    var senhaLogin = document.getElementById('senhaLogin').value 

    var entrar = false
    usuarios.forEach ( item=> {
            if (emailLogin == item.email && senhaLogin == item.senha) {
                entrar = true
                location.href = 'catalogo.html'
            }
            
    } )
    
    if (entrar == false) {
    alert ('Usuário ou senha inválidos')
    }
}

function Cadastre() {
    location.href = 'cadastro.html'
}