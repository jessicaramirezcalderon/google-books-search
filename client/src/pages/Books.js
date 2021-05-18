import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import googleAPI from "../utils/googleApi";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem, Description } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";

function Books() {
  // Setting our component's initial state
  const [results, setResults] = useState([])
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(() => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  function saveBook(book) {
    const bookToSave = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      synopsis: book.volumeInfo.description
    };

      API.saveBook(bookToSave)
      .then(res => setBooks([res.data, ...books]))
      .catch(err => console.log(err));
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      googleAPI.getGoogleBooks(formObject.search)
        .then(res => setResults(res.data.items))
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>What Books Should I Read?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={(e) => handleInputChange(e)}
              name="search"
              placeholder="Search for Book"
            />
            <FormBtn
              disabled={!(formObject.search)}
              onClick={(e) => handleFormSubmit(e)}
            >
              Search Book
              </FormBtn>
          </form>

          {results.length ? (
            <List>
              {results.map(book => (
                <ListItem key={book.id}>
                  <strong>
                    {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                  </strong>
                  <Description>
                    {book.volumeInfo.description}
                  </Description>
                  <button onClick={() => saveBook(book)} type="button" class="btn btn-info">Add Book</button>

                  {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>

        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <strong>
                    {book.title} by {book.author}
                  </strong>
                  <Description>
                    {book.description}
                  </Description>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Saved Books to Display</h3>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;