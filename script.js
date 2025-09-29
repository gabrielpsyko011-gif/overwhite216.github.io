
    function atualizarRelogio() {
      const agoraUTC = new Date();
      // Ajusta para o fuso horário de Brasília (GMT-3)
      const offsetBrasilia = -3; // horas
      const horaBrasilia = new Date(agoraUTC.getTime() + offsetBrasilia * 60 * 60 * 1000);

      const horas = String(horaBrasilia.getUTCHours()).padStart(2, '0');
      const minutos = String(horaBrasilia.getUTCMinutes()).padStart(2, '0');
      const segundos = String(horaBrasilia.getUTCSeconds()).padStart(2, '0');

      document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
    }

    setInterval(atualizarRelogio, 1000);
    atualizarRelogio(); // Atualiza imediatamente ao carregar
    function atualizarRelogio() {
  const agora = new Date();
  
  let h = agora.getHours().toString().padStart(2, '0');
  let m = agora.getMinutes().toString().padStart(2, '0');
  let s = agora.getSeconds().toString().padStart(2, '0');
  
  document.getElementById("horas").textContent = h;
  document.getElementById("minutos").textContent = m;
  document.getElementById("segundos").textContent = s;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // chama logo no início
   