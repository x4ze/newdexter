import express from "express"

const app = express();
app.set("view engine", "ejs")
app.use(express.static('public'))


const PORT = process.env.PORT || 3000;
const IP = process.env.IP || "localhost"
app.listen(PORT, IP, () => console.log(`listening at ${IP}:${PORT}`));



app.get("/", async (req, res) => {
    res.render("1/login")
})