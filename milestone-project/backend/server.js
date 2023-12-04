//server.js
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    connectionLimit: process.env.MY_SQL_DB_CONNECTION_LIMIT,
    host: process.env.MY_SQL_DB_HOST,
    user: process.env.MY_SQL_DB_USER,
    password: process.env.MY_SQL_DB_PASSWORD,
    database: process.env.MY_SQL_DB_DATABASE
});

app.get('/api/verses', (req, res) => {
    pool.query('SELECT * FROM t_asv', (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Error fetching verses', error });
      }
      res.json(results);
    });
  });

//endpoint to get books by OT/NT
app.get('/api/books/:testament', (req, res) => {
    const testament = req.params.testament;
    pool.query('SELECT * FROM book_info WHERE otnt = ?', [testament], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// Add other endpoints as needed for chapters and verses

///////////////// GET Endpoints /////////////////////////////////

// GET all books
app.get('/api/books', (req, res) => {
    pool.query('SELECT * FROM book_info', (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// GET a specific book by its 'order'
app.get('/api/books/:order', (req, res) => {
    const { order } = req.params;
    pool.query('SELECT * FROM book_info WHERE `order` = ?', [order], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// GET specific chapter verses from a book
app.get('/api/books/:bookId/chapters/:chapterId', (req, res) => {
    const { bookId, chapterId } = req.params;
    pool.query('SELECT * FROM t_asv WHERE b = ? AND c = ?', [bookId, chapterId], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// Get a specific verse of a chapter in a book
app.get('/api/books/:bookId/chapters/:chapterId/verses/:verseId', (req, res) => {
    const { bookId, chapterId, verseId } = req.params;
    pool.query('SELECT * FROM t_asv WHERE b = ? AND c = ? AND v = ?', [bookId, chapterId, verseId], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// Search for books by title_short
app.get('/api/search/title/:title_short', (req, res) => {
    const { title_short } = req.params;
    pool.query('SELECT * FROM book_info WHERE title_short LIKE ?', [`%${title_short}%`], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

// Search for verses by matching word
app.get('/api/search/word/:word', (req, res) => {
    const { word } = req.params;
    pool.query("SELECT * FROM t_asv WHERE t LIKE ?", [`%${word}%`], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

///////////////// POST Endpoint /////////////////////////////////

// Update a verse
app.post('/api/update/verse/:id', (req, res) => {
    const { id } = req.params;
    const { newText } = req.body;
    pool.query("UPDATE t_asv SET t = ? WHERE id = ?", [newText, id], (error, results) => {
        if (error) return res.status(500).json(error);
        res.json(results);
    });
});

///////////////// DELETE Endpoint /////////////////////////////////

// Delete a specific book by its 'order'
app.delete('/api/delete/book/:id', (req, res) => {
    const { id } = req.params;
    pool.query('DELETE FROM book_info WHERE `order` = ?', [id], (error, results) => {
        if (error) return res.status(500).json(error);
        res.status(200).json({ message: `Deleted book with order ${id}` });
    });
});



///////////////// PUT Endpoint /////////////////////////////////

// Add a verse at the end of the t_asv table
app.put('/api/insert/verse/:id', (req, res) => {
    const { id } = req.params;
    const { b, c, v, t } = req.body;
    pool.query("INSERT INTO t_asv(id, b, c, v, t) VALUES (?, ?, ?, ?, ?)", [id, b, c, v, t], (error, results) => {
        if (error) return res.status(500).json(error);
        res.status(201).json({ message: 'New verse added at the end.', id: results.insertId });
    });
});

///////////////////////End of SQL Operations////////////////////////

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});