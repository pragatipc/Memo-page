const express = require("express")
const router = express.Router()
const Contact = require("../models/Contact")

// @route   POST api/contact
// @desc    Submit contact form
// @access  Public
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      message,
    })

    const contact = await newContact.save()
    res.json(contact)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

module.exports = router
