const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(__dirname));

let db = {
    balance: 250,
    posts: []
};

app.get('/api/data', (req, res) => res.json(db));

app.post('/api/upload', (req, res) => {
    const newPost = {
        id: Date.now(),
        image: req.body.image,
        user: req.body.lang === 'az' ? 'Tədqiqatçı' : (req.body.lang === 'en' ? 'Explorer' : 'Исследователь'),
        time: new Date().toLocaleTimeString()
    };
    db.posts.unshift(newPost);
    db.balance += 50;
    res.json({ success: true });
});

app.listen(PORT, "0.0.0.0", () => console.log(`Server on ${PORT}`));
