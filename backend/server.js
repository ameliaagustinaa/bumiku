

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


app.listen(port, () => {
    console.log('Listening')
})