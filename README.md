# Books API

A simple RESTful API for managing a book collection. Built using **Node.js** and **MongoDB**, this API allows you to perform CRUD operations (Create, Read, Update, Delete) on books. The API includes basic functionality to add books, view all books, update book details, and delete books from the collection.

## Features
- **GET /api/books**: Fetch all books.
- **POST /api/books**: Add a new book.
- **PUT /api/books/:id**: Update a book by its ID.
- **DELETE /api/books/:id**: Remove a book by its ID.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Framework for building the API.
- **MongoDB**: NoSQL database to store the book collection.
- **Mongoose**: ODM for MongoDB to interact with the database.

## Installation

### Prerequisites
Ensure you have **Node.js** and **npm** installed. If not, download and install them from [Node.js official site](https://nodejs.org/).

### Steps to Set Up the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/books-api.git
   cd books-api
1. GET /api/books
Fetch all books from the collection.

Response:
json
Copy code
[
  {
    "_id": "12345",
    "title": "Learn JavaScript",
    "author": "John Doe",
    "isbn": "123456789",
    "publishedYear": 2024
  },
  {
    "_id": "67890",
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "isbn": "9780596517748",
    "publishedYear": 2008
  }
]
2. POST /api/books
Add a new book to the collection. The request body must include:

json
Copy code
{
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "123456789",
  "publishedYear": 2024
}
Response:
json
Copy code
{
  "_id": "new-book-id",
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "123456789",
  "publishedYear": 2024
}
3. PUT /api/books/:id
Update a book by its ID. The request body must include the fields to update:

json
Copy code
{
  "title": "Updated Title",
  "author": "Updated Author",
  "isbn": "123456789",
  "publishedYear": 2024
}
Response:
json
Copy code
{
  "_id": "book-id",
  "title": "Updated Title",
  "author": "Updated Author",
  "isbn": "123456789",
  "publishedYear": 2024
}
4. DELETE /api/books/:id
Remove a book from the collection by its ID.

Response:
json
Copy code
{
  "message": "Book deleted successfully"
}