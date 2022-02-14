const BotaoMenu  = document.querySelector('.cabecalho__menu')
const Menu = document.querySelector('.menu-lateral')

BotaoMenu.addEventListener('click', () => {
    Menu.classList.toggle('menu-lateral--ativo')
})