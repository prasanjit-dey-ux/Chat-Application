const dotenv = require ("dotenv")
const express = require ("express");
const chats  = require("./data/data");


const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("API is running")
});

app.get('/api/chat', (req, res) => {
    res.json(chats);
});

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})