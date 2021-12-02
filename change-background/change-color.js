var bgTheme = document.querySelector('body')

if(localStorage.themeStorage){
    changeColor(localStorage.themeStorage)
}

function changeColor(color){
    bgTheme.style.backgroundColor = color

    localStorage.setItem('themeStorage', color)
}