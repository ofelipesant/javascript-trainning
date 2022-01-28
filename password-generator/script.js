let tamanhoSenha = document.querySelector('#valor')
let inputTamanho = document.querySelector('.input-generator')
let containerPassword = document.querySelector('.container-password')
let password = document.querySelector('#resultado')

let modal = document.querySelector('.modal')
let closeButton = document.querySelector('.close')

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789@#!%&'
let senhaGerada = ''

tamanhoSenha.innerHTML = inputTamanho.value

inputTamanho.oninput = function(){
    tamanhoSenha.innerHTML = this.value
}

function criarSenha(){
    let pass = ''

    for(let i = 0, n = charset.length; i < inputTamanho.value; i++){
        pass+= charset.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove('hide')
    password.innerHTML = pass

    senhaGerada = pass
}

function copyPassword(){
    navigator.clipboard.writeText(senhaGerada)

    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}
    


