const menuIcon = document.querySelector('.header__menu');
menuIcon.addEventListener('click', function (){
    const menuContent = document.getElementById('headerMenu')
    const burgerIcon = document.getElementById('burgerIcon')
    burgerIcon.classList.toggle('menu__icon--active')
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block'
    const headerContainer = document.getElementById('headerContainer')
})