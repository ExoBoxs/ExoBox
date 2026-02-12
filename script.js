let stream = null;

// Загрузка данных с сервера
async function refreshData() {
    const res = await fetch('/api/data');
    const data = await res.json();
    
    document.getElementById('balance-val').innerText = data.balance;
    const container = document.getElementById('feed-container');
    
    container.innerHTML = data.posts.map(p => `
        <div class="post-card">
            <img src="${p.image}">
            <div class="post-info">
                <strong>Исследователь</strong> • ${p.time}<br>
                ${p.text}
            </div>
        </div>
    `).join('');
}

// Камера
async function openCamera() {
    const overlay = document.getElementById('camera-overlay');
    overlay.style.display = 'block';
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    document.getElementById('video').srcObject = stream;
}

function closeCamera() {
    document.getElementById('camera-overlay').style.display = 'none';
    if(stream) stream.getTracks().forEach(t => t.stop());
}

async function takeSnapshot() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    const base64Image = canvas.toDataURL('image/jpeg', 0.7);

    // Отправка на сервер
    await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image, text: "Найдено редкое растение в Sea Breeze!" })
    });

    closeCamera();
    refreshData();
}

// Фонарик
async function toggleFlash() {
    if(!stream) {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    }
    const track = stream.getVideoTracks()[0];
    const isOn = track.getSettings().torch;
    await track.applyConstraints({ advanced: [{ torch: !isOn }] });
}

// Аудиогид
function playAudio() {
    const facts = ["В Sea Breeze более 100 видов растений!", "Береги море — не бросай пластик!", "Каспийская сосна растет очень медленно."];
    const speech = new SpeechSynthesisUtterance(facts[Math.floor(Math.random()*facts.length)]);
    speech.lang = 'ru-RU';
    window.speechSynthesis.speak(speech);
}

window.onload = refreshData;
