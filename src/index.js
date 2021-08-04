const express = require("express")
const morgan = require("morgan")
const Book = require("./resources/books/model")
const Pet = require("./resources/pets/model")
const dbClient = require("./utils/database")

const port = 4000
const app = express()

// THERE WILL BE ROUTER IMPORTS


app.use(morgan("dev"))
app.use(express.json())

app.get("*", (req, res) => {
    res.status(404).send("<h1>Hey look I'm not working</h1>")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    dbClient.connect(error => {
        if (error) console.error("You can't connect to the DB because: ", error);
        else console.log("Database is running correctly");

        Book()
        Pet()
    })
})