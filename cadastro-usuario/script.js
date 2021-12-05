let nome = document.querySelector('#input-nome')
let email = document.querySelector('#input-email')
let senha = document.querySelector("#input-senha")
let tableCadastros = document.querySelector('.table-cadastros')
let buttonCadastro = document.querySelector("#button-cadastrar")
const usuario = {}

const cadastrar = () => {
    if(nome.value.length == 0 || email.value.length == 0 || senha.value.length == 0){
        window.alert('preencha todos os campos necessários para o cadastro')
    } else {
        usuario.name = nome.value
        usuario.mail = email.value
        usuario.password = senha.value
        
        let infos = document.createElement('tr')
        infos.className = 'infos'
        
        let nameInfo = document.createElement('td')
        nameInfo.innerHTML = usuario.name
        infos.appendChild(nameInfo)
        
        let emailInfo = document.createElement('td')
        emailInfo.innerHTML = usuario.mail
        infos.appendChild(emailInfo)

        let passwordInfo = document.createElement('td')
        passwordInfo.innerHTML = usuario.password
        infos.appendChild(passwordInfo)

        tableCadastros.appendChild(infos)
    }
}