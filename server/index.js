const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addCompliment, getAge, getNum, getName } = require('./controller')



app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)
app.post('/api/newcomplement', addCompliment)
app.get('/api/number', getNum)
app.get('/api/names', getName)
app.get('/api/ages', getAge)

app.listen(4005, () => console.log("Server running on 4005"));
