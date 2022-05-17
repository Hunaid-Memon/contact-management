const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all the user's contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all contact')
});

// @route   POST api/contacts
// @desc    Add a new contact
// @access  Private
router.post('/', (req, res) => {
    res.send('Add a Contact')
});

// @route   PUT api/contacts/:id
// @desc    Update a contact
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update the Contact')
});

// @route   DELETE api/contacts/:id
// @desc    Delete a contact
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete the Contact')
});

module.exports = router;