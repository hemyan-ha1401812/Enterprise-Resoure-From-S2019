//todo implement the routes and link them to the service

const express = require('express');
const router = express.Router();

const bookService = require('./services/book-service');

router.get('/api/books?name=', bookService.getBook());

router.get('/api/books?pageCount=', bookService.getBooksByPageCount());

router.get('/api/books?author=', bookService.getBooksByAuthor());

router.get('/api/books?category=', bookService.getBooksByCategory());

router.get('/api/books/summary', bookService.getBooksSummary());

router.route('/api/books/').get( bookService.getBook).post( bookService.addBook());

router.route('/api/books/:isbn').put( bookService.updateBook());

router.route('/api/books/:isbn').delete( bookService.deleteBook());






