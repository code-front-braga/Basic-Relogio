function relogio () {
    const dataAtual = new Date();
    const horas = dataAtual.getHours().toString().padStart('2', 0);
    const minutos = dataAtual.getMinutes().toString().padStart('2', 0);
    const segundos = dataAtual.getSeconds().toString().padStart('2', 0);
    const diaAtual = dataAtual.getDate().toString().padStart('2', 0);
    const mesAtual = Number(dataAtual.getMonth().toString().padStart('2', 0));
    const anoAtual = dataAtual.getFullYear().toString().padStart('2', 0);
    
    let dias = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado'
    ];
    
    let meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ];
    
    mostrarRelogio (horas, minutos, segundos);
    
    /*Manipulando Estilo*/
    const info = document.querySelector('.informacao');
    const main = document.querySelector('.main');
    const imagem = document.querySelector('#foto');
    const relogio = document.querySelector('.relogio');
    
    const caixaHoras = document.querySelector('#horas');
    const caixaMinutos = document.querySelector('#minutos');
    const caixaSegundos = document.querySelector('#segundos');
    
    if (horas >= 0 && horas < 5) {
        imagem.setAttribute('src', 'Imagens/madrugada.png');
        relogio.style.color = '#fff';
        info.style.color = '#fff';
        info.style.boxShadow = '0rem 0rem .5rem #fff';
        main.style.boxShadow = '0rem 0rem 2rem #fff';
        caixaHoras.style.boxShadow = '0rem 0rem .5rem #fff';
        caixaMinutos.style.boxShadow = '0rem 0rem .5rem #fff';
        caixaSegundos.style.boxShadow = '0rem 0rem .5rem #fff';

    } else if (horas <= 12) {
        imagem.setAttribute('src', 'Imagens/manha.png');
        
    } else if (horas < 18) {
        imagem.setAttribute('src', 'Imagens/tarde.png');
        
    } else {
        imagem.setAttribute('src', 'Imagens/noite.png');
        relogio.style.color = '#fff';
        info.style.color = '#fff';
        info.style.boxShadow = '0rem 0rem .5rem #fff';
        main.style.boxShadow = '0rem 0rem 2rem #fff';
        caixaHoras.style.boxShadow = '0rem 0rem .5rem #fff';
        caixaMinutos.style.boxShadow = '0rem 0rem .5rem #fff';
        caixaSegundos.style.boxShadow = '0rem 0rem .5rem #fff';
    }
    info.innerHTML = `Olá! Hoje é ${dias[dataAtual.getDay()]}, ${diaAtual} de ${meses[mesAtual]} de ${anoAtual}`;
    imagem.style.opacity = 1;
}
setInterval (relogio, 1000);








