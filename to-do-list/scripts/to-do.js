let add = document.querySelector("#add")
add.addEventListener('click', adicionar)

let list = document.querySelector("#list")

function adicionar(){
    let listItem = document.querySelector('#list-item').value

    if (listItem !== ''){
        let content = document.createElement('li')
        content.innerHTML = listItem
        listItem = ''

        let removeButton = document.createElement('button')
        removeButton.className = 'close'
        removeButton.innerHTML = "X"
        content.appendChild(removeButton)
        list.appendChild(content)
        
        content.addEventListener('click', markItem)

        removeButton.addEventListener('click', deleteItem)

        function deleteItem(){
            content.style.display = 'none'
        }

        function markItem(){
            content.style.transition = '.3s'
            content.style.textDecoration = 'line-through'
            content.style.backgroundColor = "#ffa69e"
            
        }
        
    } else{
        window.alert("[ERROR] Verifique os dados")
    }
}

/* trocar o tema */
let checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('change', changeTheme)

function changeTheme(){
    let theme = document.querySelector('html')
    let themeStyle = document.querySelector('#theme-style')

    if(checkbox.checked){
        theme.setAttribute('data-theme', 'dark')
        themeStyle.innerHTML = 'tema: <strong>dark</strong>'
        themeStyle.style.color = 'white'

    }else{
        theme.setAttribute('data-theme', 'light')
        themeStyle.innerHTML = 'tema: <strong>light</strong>'
        themeStyle.style.color = 'black'
    }
}


