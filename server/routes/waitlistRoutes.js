const express = require("express")
const router = express.Router()
const Waitlist = require("../models/Waitlist")

// @route   POST api/waitlist
// @desc    Join waitlist
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body

    // Check if email already exists
    const user = await Waitlist.findOne({ email })

    if (user) {
      return res.status(400).json({ msg: "User already on waitlist" })
    }

    // Create new waitlist entry
    const newWaitlist = new Waitlist({
      name,
      email,
    })

    const waitlist = await newWaitlist.save()
    res.json(waitlist)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router
