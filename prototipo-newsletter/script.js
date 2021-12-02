let inputEmail = document.querySelector('#input-email')
let valores = []
let resultado = document.querySelector('#resultado')
let lista = document.querySelector('.list')

function cadastrar(){

    if(!inLista(inputEmail.value, valores) && inputEmail.value.length !== 0){
        valores.push(inputEmail.value)
    }
    else{
        window.alert("O email inserido já está cadastrado ou é inválido.")   
    }

    inputEmail.value = ''
    inputEmail.focus()
    lista.innerHTML = ""
}

function consultar(){
    if(valores.length == 0){
        window.alert("Não há nenhum e-mail cadastrado ou a consulta já foi realizada")
    }
    else{
        lista.innerHTML = ''
        valores.forEach((value) => {
            let topicoList = document.createElement('li')
            topicoList.innerHTML = value
            lista.appendChild(topicoList)
        })
           
    }
}

//verificar se o email cadastrado já não foi adicionado
function inLista(e, l){
    if(l.indexOf(e) != -1){
        return true
    }else{
        return false
    }
}

//dark-theme
let checkbox = document.querySelector("#checkbox")
checkbox.addEventListener('change', changeTheme)

function changeTheme(){
    let html = document.querySelector('html')

    if(checkbox.checked){
        html.setAttribute('data-theme', 'dark')
    }
    else{
        html.setAttribute('data-theme', 'light')
    }
}


