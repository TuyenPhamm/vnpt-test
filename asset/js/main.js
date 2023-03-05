const Menu = document.querySelector('.js-menu')
    const modal = document.querySelector('.js-modal')
    const modalClose = document.querySelector('.js-modal-close')
    const modalContainer = document.querySelector('.js-modal-container')

    function showMenu(){
        modal.classList.add('open')
    }

    function hideMenu(){
        modal.classList.remove('open')
    }

    Menu.addEventListener('click', showMenu)


    modalClose.addEventListener('click',hideMenu)
    modal.addEventListener('click',hideMenu)
    modalContainer.addEventListener('click',function(event){
         event.stopPropagation()  
    })