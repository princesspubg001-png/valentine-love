const btn = document.getElementById('surpriseBtn');
const text = document.getElementById('hiddenText');

btn.addEventListener('click', () => {
  text.style.display = 'block';
  text.style.animation = 'fadeIn 1s ease';
});