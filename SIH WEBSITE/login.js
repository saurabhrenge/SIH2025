const userPassBtn = document.getElementById('userPassBtn');
const otpBtn = document.getElementById('otpBtn');
const userPassForm = document.getElementById('userPassForm');
const otpForm = document.getElementById('otpForm');

userPassBtn.addEventListener('click', () => {
  userPassBtn.classList.add('active');
  otpBtn.classList.remove('active');
  userPassForm.classList.add('active');
  otpForm.classList.remove('active');
});

otpBtn.addEventListener('click', () => {
  otpBtn.classList.add('active');
  userPassBtn.classList.remove('active');
  otpForm.classList.add('active');
  userPassForm.classList.remove('active');
});

// Redirect on form submit
userPassForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Form ko actual submit hone se roke
  window.location.href = "dashboard.html"; // Yahan redirect page ka naam de
});

otpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = "dashboard.html"; // Same redirect page
});
