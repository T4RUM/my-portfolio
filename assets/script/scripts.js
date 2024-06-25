// Pegando a hora atual
function atualizarHora() {
  const horas = document.querySelector(".time");
  const data = new Date();
  let hora = data.getHours().toString().padStart(2, "0");
  let minutos = data.getMinutes().toString().padStart(2, "0");

  horas.innerHTML = `${hora}:${minutos}`;
}

// Atualiza a hora a cada segundo
const intervalID = setInterval(atualizarHora, 1000);
