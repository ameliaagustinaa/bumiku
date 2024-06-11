

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
    const values = [email, password];
    db.query(sql, values, (err, result) => {
        if (err) return res.status(500).json({ message: 'Internal server error' });
        if (result.length === 0) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        } else {
            return res.status(200).json({ message: 'Login successful' });
        }
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