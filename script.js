// Interactive Logic
const startBtn = document.getElementById('startBtn');
const nameInput = document.getElementById('nameInput');
const greetingMsg = document.getElementById('greetingMsg');

startBtn?.addEventListener('click', () => {
  const name = nameInput.value.trim();
  
  // Add a simple animation class temporarily
  startBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    startBtn.style.transform = '';
  }, 100);
  
  if (name) {
    greetingMsg.textContent = `Hello ${name}! Ready to build something amazing?`;
    greetingMsg.classList.remove('hidden');
  } else {
    nameInput.focus();
    nameInput.style.borderColor = '#ef4444'; // Red border for error state
    setTimeout(() => {
      nameInput.style.borderColor = '';
    }, 1000);
  }
});