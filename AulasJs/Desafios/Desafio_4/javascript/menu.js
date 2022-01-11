(function(){

    var $html = document.querySelector('html');
    var $btn = document.querySelector('.header-nav__hamburgger');

    var $ariaControl = $btn.getAttribute('aria-controls');
    
    var $menu = document.getElementById(aria-controls);
    
    $html.classList.remove('no-js');
    $html.classList.add('js');
    
    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');
        var $ariaExpaned = this.getAttribute('aria-expanded') === 'true'; 

        $btn.setAttribute('aria-expanded', !$ariaExpaned);
        $menu.setAttribute('aria-expanded', !$ariaExpaned);


    })
})()