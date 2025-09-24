const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatWindow = document.getElementById('chat-window');

sendBtn.addEventListener('click', () => {
  const msg = userInput.value.trim();
  if(!msg) return;
  addMessage('You', msg);
  userInput.value = '';

  // Simple dummy bot reply
  setTimeout(() => {
    addMessage('Bot', "Thanks for asking about Kerala farming! 🌾 We'll get back to you soon.");
  }, 800);
});

function addMessage(sender, text) {
  const div = document.createElement('div');
  div.classList.add(sender === 'Bot' ? 'bot-msg' : 'user-msg');
  div.textContent = `${sender}: ${text}`;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
