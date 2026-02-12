const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// База данных в оперативной памяти
let db = {
    balance: 250,
    posts: []
};

// Получить данные
app.get('/api/data', (req, res) => res.json(db));

// Начислить монеты
app.post('/api/balance', (req, res) => {
    db.balance += (req.body.amount || 0);
    res.json({ success: true, balance: db.balance });
});

// Загрузить фото в ленту
app.post('/api/upload', (req, res) => {
    const newPost = {
        id: Date.now(),
        image: req.body.image, // Base64 строка снимка
        text: req.body.text || "Новое открытие в Sea Breeze!",
        time: new Date().toLocaleTimeString()
    };
    db.posts.unshift(newPost); // Добавляем в начало списка
    db.balance += 50; // Бонус за активность
    res.json({ success: true, post: newPost });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
