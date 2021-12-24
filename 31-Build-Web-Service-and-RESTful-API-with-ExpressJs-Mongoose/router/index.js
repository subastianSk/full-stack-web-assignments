const express = require("express")
const router = express.Router()

const instructor = require("./instructor.router")
const participant = require("./participant.router")
const course = require("./course.router")

router.use("/instructor", instructor)
router.use("/participant", participant)
router.use("/course", course)

router.get("/", (req, res) => {
    res.status(200).send("Welcome Page")
})

module.exports = router