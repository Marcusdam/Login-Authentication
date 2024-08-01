const express = require('express');
const mysql = require('mysql');
const cors =require('cors');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'users'
})
app.post('/signup', (req, res) =>{
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES(?)"

    values =[
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(sql, [values], (err, data) =>{
        if(err) {
            return res.json("Error")
        }
        return res.json(data)
    })
})
app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM login WHERE `email`= ? AND `password` = ?"

    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) {
            return res.json("Error")
        }
        if(data.length > 0){
            return res.json('success')
        } else{
            return res.json('failed')
        }
    })
})

const port = 8080
app.listen(port, () =>{
    console.log(`server is listening on port: ${port}`)
})