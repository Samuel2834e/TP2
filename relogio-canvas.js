// RELOGIO1
let canvas = document.querySelector('#canvas');
let mexerRelogio = document.querySelector('#mexer-relogio');
let y1 = 1;
let x1 = 1;
canvas.addEventListener('click', () => {
    canvas.requestPointerLock();
});
document.addEventListener('pointerlockchange', lockChangeAlert1);
function lockChangeAlert1() {
    if (document.pointerLockElement === canvas) {
        document.addEventListener('mousemove', mudarPosiçao1);
    } else {
        document.removeEventListener('mousemove', mudarPosiçao1);
    }
}
function mudarPosiçao1(e) {
    y1 += e.movementY;
    x1 += e.movementX;
    mexerRelogio.style.left = `${x1}px`;
    mexerRelogio.style.top = `${y1}px`;
}

//RELOGIO2
let canvasRelogio = document.querySelector('#canvas2');
let mexerRelogio2 = document.querySelector('#relogio');
let y2 = 1;
let x2 = 1;
canvasRelogio.addEventListener('click', () => {
    canvasRelogio.requestPointerLock();
});
document.addEventListener('pointerlockchange', lockChangeAlert2);
function lockChangeAlert2() {
    if (document.pointerLockElement === canvasRelogio) {
        document.addEventListener('mousemove', mudarPosiçao2);
    } else {
        document.removeEventListener('mousemove', mudarPosiçao2);
    }
}
function mudarPosiçao2(e) {
    y2 += e.movementY;
    x2 += e.movementX;
    mexerRelogio2.style.left = `${x2}px`;
    mexerRelogio2.style.top = `${y2}px`;
}




