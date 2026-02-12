const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_FILE = './database.json';

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// Загрузка данных из файла при старте
let db = { posts: [] };
if (fs.existsSync(DB_FILE)) {
    db = JSON.parse(fs.readFileSync(DB_FILE));
}

const saveDB = () => fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));

app.get('/api/data', (req, res) => res.json(db));

app.post('/api/upload', (req, res) => {
    const newPost = {
        id: Date.now(),
        image: req.body.image,
        user: req.body.lang === 'az' ? 'Tədqiqatçı' : (req.body.lang === 'en' ? 'Explorer' : 'Исследователь'),
        time: new Date().toLocaleTimeString()
    };
    db.posts.unshift(newPost);
    saveDB();
    res.json({ success: true });
});

app.post('/api/delete', (req, res) => {
    db.posts = db.posts.filter(p => p.id !== req.body.id);
    saveDB();
    res.json({ success: true });
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on ${PORT}`));
