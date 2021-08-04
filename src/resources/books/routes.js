const express = require("express")

const bookRouter = express.Router()

bookRouter.get("/", ()=> {})

bookRouter.get("/:id", ()=> {})

bookRouter.post("/", ()=> {})

bookRouter.patch("/:id", ()=> {})

bookRouter.put("/:id", ()=> {})

bookRouter.delete("/:id", ()=> {})
