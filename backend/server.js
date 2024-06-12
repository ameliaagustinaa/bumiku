

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, "public")))
app.use(cors())
app.use(express.json())

const port = 5000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bumiku"
})

app.post('/add_user', (req, res) => {
    const sql = "INSERT INTO users (email, name, password) VALUES (?, ?, ?)";
    const values = [
        req.body.email,
        req.body.name,
        req.body.password
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: 'Something unexpected has occurred' + err });
        return res.json({ success: "User added successfully" });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) return res.json({ message: 'Internal server error' + err });
        if (result.length > 0) {
            return res.json({ success: "Login successful", user: result[0] });
        } else {
            return res.json({ message: 'Invalid email or password' });
        }
    });
});

app.post('/tambah_informasi', (req, res) => {
    const sql = "INSERT INTO tambah_informasi (judul, deskripsi, konten_informasi) VALUES (?, ?, ?)";
    const values = [
        req.body.judul,
        req.body.deskripsi,
        req.body.konten_informasi
    ];
    db.query(sql, values, (err, result) => {
        if (err) return res.json({ message: 'Something unexpected has occurred' + err });
        return res.json({ success: "Informasi added successfully" });
    });
});



app.get('/users', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM users WHERE 'id' = ?";
    db.query(sql, [id], (err, result) => {
        if (err) return res.json({ message: 'Internal server error' });
        return res.json(result);
    });
});



app.listen(port, () => {
    console.log('Listening')
})