// Menu moblie
const menuMobileLeft = () =>{
    const menuMobile = document.querySelector('.menu-mobile')
    const sideBarMenu = document.querySelector('.sidebar-menu')
    const modalSidebar = document.querySelector('.modal-sidebar')
    const btnClose = document.querySelector('.btn-close')


    document.addEventListener('click', (e) =>{
        const el = e.target;
    if(el.classList.contains('menu-mobile')){
        sideBarMenu.classList.add('open')
        modalSidebar.classList.add('show')
        document.body.classList.add('hide')
    }else if((el.classList.contains('btn-close') || (el.target !== sideBarMenu))){
        sideBarMenu.classList.remove('open')
        modalSidebar.classList.remove('show')
        document.body.classList.remove('hide')
    }
    })
}
menuMobileLeft();
