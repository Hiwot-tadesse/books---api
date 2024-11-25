const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// @route GET /
// @desc Fetch all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// @route POST /
// @desc Add a new book
router.post('/', async (req, res) => {
    const { title, author, isbn, publishedYear } = req.body;

    if (!title || !author || !isbn || !publishedYear) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const book = new Book({ title, author, isbn, publishedYear });
        await book.save();
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.put('/books/:id', async (req, res) => {
    const { id } = req.params;  // Get the ID from URL params
    const { title, author, isbn, publishedYear } = req.body;  // Get other details from request body

    // Validate the fields
    if (!title || !author || !isbn || !publishedYear) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Find the book by the custom _id and update it
        const book = await Book.findByIdAndUpdate(
            id, // Match the custom _id from URL
            { title, author, isbn, publishedYear }, // Updated data
            { new: true, runValidators: true } // Return the updated document and validate
        );

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        // Respond with the updated book
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete('/books/:id', async (req, res) => 
    { try { const book = await Book.findByIdAndDelete(req.params.id);
         if (!book) { return res.status(404).json({ error: 'Book not found' }); } 
         res.json({ message: 'Book deleted' });
         } catch (error) 
         { res.status(500).json({ message: error.message }); } });


module.exports = router;
