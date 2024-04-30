// variáveis e constantes que serão usadas ao longo do código.
let timerRef = document.querySelector(".timer-display"); // Onde mostramos o tempo.
const hourInput = document.getElementById("hourInput"); // Onde a criança digita a hora.
const minuteInput = document.getElementById("minuteInput"); // Onde a criança digita os minutos.
const activeAlarms = document.querySelector(".activeAlarms"); // Onde vamos mostrar os alarmes.
const setAlarm = document.getElementById("set"); // O botão para a criança criar um alarme.
let alarmsArray = []; // Aqui, guardamos os alarmes que a criança cria.
let alarmSound = new Audio("./alarm.mp3"); // Este é o som que vai tocar quando o alarme disparar.



