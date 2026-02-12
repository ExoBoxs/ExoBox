let currentStream = null;
let balance = 0;

// Инициализация при загрузке
async function init() {
    const res = await fetch('/api/user');
    const data = await res.json();
    balance = data.balance;
    updateUI(data);
}

function updateUI(data) {
    document.getElementById('balance-val').innerText = balance;
    const container = document.getElementById('feed-container');
    container.innerHTML = data.posts.map(p => `
        <div class="post-card">
            <img src="${p.image}">
            <p>${p.text} <span>${p.timestamp}</span></p>
        </div>
    `).join('');
}

// 1. Фонарик
async function toggleTorch() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}});
        const track = stream.getVideoTracks()[0];
        const state = track.getSettings().torch || false;
        await track.applyConstraints({advanced: [{torch: !state}]});
    } catch (e) { alert("Фонарик доступен только на мобильных HTTPS"); }
}

// 2. Аудиогид
function playAudioGuide() {
    const facts = [
        "Каспийское море — самое большое закрытое озеро в мире!",
        "Пластик в море разлагается 450 лет. Спасибо за помощь в уборке!",
        "Берегите Каспийскую нерпу, это уникальный символ нашего края."
    ];
    const speech = new SpeechSynthesisUtterance(facts[Math.floor(Math.random()*facts.length)]);
    speech.lang = 'ru-RU';
    window.speechSynthesis.speak(speech);
}

// 3. Компас
window.addEventListener('deviceorientationabsolute', (e) => {
    let heading = e.alpha || e.webkitCompassHeading;
    if(heading) {
        document.getElementById('compass-arrow').style.transform = `rotate(${-heading}deg)`;
        document.getElementById('compass-text').innerText = Math.round(heading) + '°';
    }
});

// 4. Сканер и Серверная загрузка
async function capturePhoto() {
    const canvas = document.createElement('canvas');
    const video = document.getElementById('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    const base64 = canvas.toDataURL('image/jpeg');
    
    // Отправка на сервер
    await fetch('/api/upload', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ image: base64, text: "Найдено редкое растение!" })
    });

    // Начисление монет через сервер
    await fetch('/api/balance', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ amount: 50 })
    });

    closeScanner();
    init(); // Обновить всё
}

function switchTab(id) {
    document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Запуск
document.getElementById('torch-btn').onclick = toggleTorch;
document.getElementById('audio-btn').onclick = playAudioGuide;
document.getElementById('scan-btn').onclick = () => document.getElementById('camera-modal').style.display='block';
init();
