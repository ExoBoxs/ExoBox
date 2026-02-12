let currentStream = null;

// Функция для включения камеры
async function openScanner() {
    const modal = document.getElementById('camera-modal');
    const video = document.getElementById('video');
    modal.style.display = 'block';

    try {
        currentStream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: 'environment' } 
        });
        video.srcObject = currentStream;
    } catch (err) {
        alert("Ошибка доступа к камере: " + err);
    }
}

// Функция СДЕЛАТЬ ФОТО и отправить на сервер
async function capturePhoto() {
    const video = document.getElementById('video');
    const canvas = document.createElement('canvas');
    
    // Устанавливаем размер фото как у видео
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Рисуем кадр из видео на холст
    canvas.getContext('2d').drawImage(video, 0, 0);
    
    // Превращаем в строку (base64)
    const imageData = canvas.toDataURL('image/jpeg', 0.7);

    // Отправляем на сервер
    const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            image: imageData, 
            text: "Новое открытие в Sea Breeze!" 
        })
    });

    if (response.ok) {
        // Начисляем монеты за фото
        await fetch('/api/balance', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 50 })
        });
        
        alert("Фото опубликовано! +50 эко-монет");
        closeScanner();
        loadData(); // Обновляем ленту и баланс
    }
}

function closeScanner() {
    document.getElementById('camera-modal').style.display = 'none';
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
    }
}

// Загрузка данных (лента и баланс)
async function loadData() {
    const res = await fetch('/api/user');
    const data = await res.json();
    
    document.getElementById('balance-val').innerText = data.balance;
    
    const feed = document.getElementById('feed-container');
    feed.innerHTML = data.posts.map(post => `
        <div class="post-card">
            <img src="${post.image}" style="width:100%; border-radius:15px;">
            <div style="padding:10px;">
                <small>⏰ ${post.timestamp}</small>
                <p>${post.text}</p>
            </div>
        </div>
    `).join('');
}

// Запускаем загрузку при старте
window.onload = loadData;
