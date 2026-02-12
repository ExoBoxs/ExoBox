const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('public')); // Папка для фронтенда

// Имитация базы данных в файле
let db = {
    balance: 250,
    posts: []
};

// Получить данные профиля
app.get('/api/user', (req, res) => res.json(db));

// Обновить баланс
app.post('/api/balance', (req, res) => {
    db.balance += req.body.amount;
    res.json({ success: true, newBalance: db.balance });
});

// "Загрузить" фото в ленту
app.post('/api/upload', (req, res) => {
    const newPost = {
        id: Date.now(),
        image: req.body.image,
        text: req.body.text,
        timestamp: new Date().toLocaleTimeString()
    };
    db.posts.unshift(newPost);
    res.json(newPost);
});

app.listen(PORT, () => console.log(`Сервер запущен: http://localhost:${PORT}`));
