var button = document.getElementById('button');
var fade = document.getElementById('Fade');

button.addEventListener('mouseleave', function leave(){
    fade.style.animationName = 'out'
    fade.style.animationDelay = '0s'
    fade.style.animationDuration = '0.5s'
    fade.style.animationFillMode = 'both'
});

button.addEventListener('mouseenter', function enter() {
    fade.style = ''
});