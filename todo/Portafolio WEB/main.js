let app = document.getElementById('typewriter');
let typewriter = new Typewriter (app,{
loop: true,
delay: 75,
});

typewriter
.pauseFor(3500)
.typeString(' Tu depresión no es un problema técnico, es una señal. Escúchala.”  <br> <br> -Johann Hari')
.pauseFor (300)
.deleteChars (10)
.start();