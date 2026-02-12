const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Добавили встроенный модуль path
const app = express();

// Render сам назначит PORT, если нет — используем 3000
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));

// Эта строка заставляет сервер отдавать index.html и скрипты из корня
app.use(express.static(__dirname));

// Имитация базы данных (в оперативной памяти)
let db = {
    balance: 250,
    posts: []
};

// Эндпоинт для получения данных
app.get('/api/user', (req, res) => res.json(db));

// Эндпоинт для обновления монет
app.post('/api/balance', (req, res) => {
    if (req.body.amount) {
        db.balance += req.body.amount;
    }
    res.json({ success: true, newBalance: db.balance });
});

// Эндпоинт для "загрузки" фото
app.post('/api/upload', (req, res) => {
    const newPost = {
        id: Date.now(),
        image: req.body.image,
        text: req.body.text || "Новая находка!",
        timestamp: new Date().toLocaleTimeString()
    };
    db.posts.unshift(newPost);
    res.json(newPost);
});

// Запуск сервера на всех интерфейсах (0.0.0.0 важно для Render)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sea Breeze Eco Box запущен на порту ${PORT}`);
});
