const button = document.getElementById('change-color-btn');
const body = document.getElementsByTagName('body')[0];
const profileImg = document.getElementById('profile-img');

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % colors.length;
  body.style.backgroundColor = colors[currentIndex];
}, 100);

// 自動放大縮小和旋轉圖片
let lastTime = 0;
let angle = 0;
let scale = 1;
function animate() {
  const now = performance.now();
  const elapsed = now - lastTime;
  lastTime = now;

  angle += elapsed / 10;
  scale = 1 + 0.1 * Math.sin(angle / 10);

  profileImg.style.transform = `scale(${scale}) rotate(${angle}deg)`;

  requestAnimationFrame(animate);
}
animate();
