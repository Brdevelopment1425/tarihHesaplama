function calculateTime() {
    const input = document.getElementById('dateInput').value;
    if (!input) return;
  
    const selectedDate = new Date(input);
    const now = new Date();
    let diff = Math.abs(now - selectedDate);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    const future = selectedDate > now;
    const prefix = future ? '📅 Bu tarihe kalan süre:' : '⏳ Bu tarihten geçen süre:';
  
    const result = `
      ${prefix}
      <br><br>
      <strong>${days}</strong> gün<br>
      <strong>${hours}</strong> saat<br>
      <strong>${minutes}</strong> dakika<br>
      <strong>${seconds}</strong> saniye
    `;
  
    document.getElementById('resultContainer').innerHTML = result;
  }
  
  setInterval(() => {
    const input = document.getElementById('dateInput').value;
    if (input) calculateTime();
  }, 1000);
  