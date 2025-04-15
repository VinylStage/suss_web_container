const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const dbPath = path.join(__dirname, 'db', 'guestbook.db');
const db = new sqlite3.Database(dbPath);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

db.run(`CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`);

app.get('/', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    res.render('index', { messages: rows });
  });
});

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  db.run('INSERT INTO messages (name, message) VALUES (?, ?)', [name, message], () => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('http://localhost:3000 에서 실행 중');
});
