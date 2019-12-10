const mq = window.matchMedia('(max-width: 1023px)');
var nav = document.getElementById('nav-item');
var tog = document.getElementsByClassName('toggle');
var btn = document.getElementById('btn');
if (mq.matches){
    nav.style.display = 'none';
}

btn.addEventListener('click', function () {

    if (nav.style.display === 'block') {
        nav.style.display = 'none' ; 
        nav.style.transitionDuration = "3s";  
    }
    else {
        nav.style.display = 'block';     
        nav.style.transitionDuration = "3s"; 
    }
});

