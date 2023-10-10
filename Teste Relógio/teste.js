const dataAtual = new Date();
const newDay = dataAtual.getDate();
const newMonth = Number(dataAtual.getMonth());

let allDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
];

let allMonths = [
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

console.log('Data do dia: ' + newDay);
console.log('Nome do dia: ' + allDays[dataAtual.getDay()]);

console.log('Número do Mês: ' + Number(newMonth + 1));
console.log('Nome do Mês: ' + allMonths[newMonth]);
