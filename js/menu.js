/*---- ABRIR MENÚ ↓↓ ----*/
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


/*---- FORMULARIO ↓↓ ----*/
form = document.getElementById('form') ;

form.addEventListener('submit', (event) => {
    event.preventDefault() ;    // prevenir envíos por defecto del formulario

        // selección de cada elemento por usar ↓↓
    let inputName = document.getElementById('form__name-input') ,
        inputEmail = document.getElementById('form__email-input') ,
        errorName = document.getElementById('inputname__error') ,
        errorEmail = document.getElementById('inputemail__error') ,
        success = document.getElementById('success-message') ;

        // ↓↓ expresión regular para permitir dos palabras de a - z cada una de 3 letras
    let regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,} [a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}$/ ;
        /* ↓↓ 1. permitir palabras de a - z, números 0 - 9 y algunos símbolos
              2. '+' obligatoriamente un '@'
              3. dominios entre 'hotmail, gamil' etc
              4. '\.' para permitir obligatoriamente un punto '\' para con '.' no referir a cualquier carácter
              5. '$/' debe terminar con 'com, net o es' ↓↓ */ 
    let regexEmail = /^[a-z0-9._%+-]+@(hotmail|gmail|outlook|yahoo)\.(com|net|es)$/ ;

    let validation = true ;    // validar si se mantiene en true; el formulario y así enviarlo

    if (!regexName.test(inputName.value.trim())) {  // prueba el 'regex' con lo ingresado en el 'input'
        errorName.style.display = 'block' ;
        validation = false ;
    } else {
        errorName.style.display = 'none' ;
    }

    if (!regexEmail.test(inputEmail.value.trim())) {
        errorEmail.style.display = 'block' ;
        validation = false ;
    } else {
        errorEmail.style.display = 'none' ;
    }

    if(validation) {
        success.style.transform = 'translateX(0%)' ;
        setTimeout(() => {
            success.style.transform = 'translateX(101%)' ;
            location.reload() ;
        },3500) ;
    }
})