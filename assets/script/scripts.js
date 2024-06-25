// Pegando a hora atual
const horas = document.querySelector('.time');
const data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes().toString().padStart(2, '0');

// Usando template literals para definir o conteúdo do elemento
horas.innerHTML = `${hora}:${minutos}`;