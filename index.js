const checkInput = document.querySelector('.nav__input')
const menu = document.querySelectorAll('.li__a')
const boton = document.querySelector('.circle')
const arrayMenu = [...menu]

arrayMenu.map(item =>{
    item.addEventListener('click', ()=>{
        checkInput.checked = false;
    })
})

