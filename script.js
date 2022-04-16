console.log('[DevSoutinho] Flappy Bird');
console.log('Inscreva-se no canal :D https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


function loop() {
    contexto.drawImage(
        sprites,
        0, 0, //sprite x e sprite y
        33, 24, //tamanho do recorte na sprite
        10, 50,
        33, 24,
    );

    requestAnimationFrame(loop);
}

loop();


