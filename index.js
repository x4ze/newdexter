import express from "express"

const app = express();
app.set("view engine", "ejs")


const PORT = process.env.PORT || 3000;
const IP = process.env.IP
app.listen(PORT, IP, () => console.log(`listening at ${IP}:${PORT}`));



app.get("/", async (req, res) => {
    res.render("login")
})