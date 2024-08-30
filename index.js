import express from "express"

const app = express();
app.use("view engine", "ejs")


const PORT = 3000;
app.listen(PORT, () => console.log(`listening at ${PORT}`));



app.get("/", async (req, res) => {
    res.render("login")
})