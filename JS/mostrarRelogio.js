function mostrarRelogio (h, m, s) {
    const showHoras = document.querySelector('#horas');
    showHoras.innerHTML = h;

    const showMinutos = document.querySelector('#minutos');
    showMinutos.innerHTML = m;

    const showSegundos = document.querySelector('#segundos');
    showSegundos.innerHTML = s;  
};