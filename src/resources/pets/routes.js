const express = require("express")

const petsRouter = express.Router()

petsRouter.get("/", ()=> {})

petsRouter.get("/:id", ()=> {})

petsRouter.post("/", ()=> {})

petsRouter.patch("/:id", ()=> {})

petsRouter.put("/:id", ()=> {})

petsRouter.delete("/:id", ()=> {})
