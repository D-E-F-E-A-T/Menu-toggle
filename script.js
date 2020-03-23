  function menuT() {

    let menu = document.querySelector('#menu-area');

    if(menu.style.width == '200px') {

        menu.style.width = '0px';
    }
    else {
        menu.style.width = '200px';
    }
} 

// outra forma de fazer é com classe (neste caso é necessário ter uma classe css no menu-area com o width: 0px;)

/* function menuT() {

    let menu =  document.querySelector('#menu-area');

    if(menu.classList.contains('menuAberto') == true) {

        menu.classList.remove('menuAberto');
    } else {

        menu.classList.add('menuaberto');
 }
} */