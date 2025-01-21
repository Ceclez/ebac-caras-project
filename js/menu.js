document.addEventListener('DOMContentLoaded', function() {
    let burger_menu = document.querySelector('#burger-menu') ,
        navigation_bar = document.querySelector('nav ul') ,
        close_menu = document.querySelector('#close-menu') ;

    burger_menu.addEventListener('click', function(event) {
        event.stopPropagation() ;
        if (navigation_bar.style.display === 'none' || navigation_bar.style.display === '') {
            navigation_bar.style.display = 'grid' ;
            close_menu.style.display = 'block' ;
        } else {
            navigation_bar.style.display = 'none' ;
            close_menu.style.display = 'none' ;
        }
    }) ;

    close_menu.addEventListener('click', function() {
        if (navigation_bar.style.display === 'none' || navigation_bar.style.display === '') {
            navigation_bar.style.display = 'grid' ;
            close_menu.style.display = 'block' ;
        } else {
            navigation_bar.style.display = 'none' ;
            close_menu.style.display = 'none' ;
        }
    }) ;
})