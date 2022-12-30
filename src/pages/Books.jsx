import React, { useEffect, useState } from "react";
import books from "../data/Books.json";
import { Row, Col } from "react-bootstrap";
import LinkBtn from "../components/LinkBtn";

// CSS imports
import "../styles/Pages.css";

export default function Books() {
  const [viewBookList, setViewBookList] = useState(false);
  const [viewRestBookList, setViewRestBookList] = useState(false);
  useEffect(() => {
    document.title = "Bookshelf | Hunter Goff";
  }, []);

  function handleFavoriteBookListBtn() {
    setViewBookList(!viewBookList);
    console.log("list button clicked");
  }

  function handleRegularBookListBtn() {
    setViewRestBookList(!viewRestBookList);
    console.log("list button clicked");
  }

  function returnBooksOrList() {
    if (viewBookList) {
      return <p> yes, book list</p>;
    } else {
      {
        return books.books.map((book, i) =>
          book.favorite ? (
            <div className="bookshelf-parent">
              <a
                href={book.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                key={book.id}
              >
                <img
                  className="book-style"
                  src={book.thumbnail}
                  alt="Hunter's Book # {book.id}"
                  key={book.id}
                />
              </a>
            </div>
          ) : null
        );
      }
    }
  }

  function returnRestBookOrList() {
    if (viewRestBookList) {
      return <p> yes, regular book list</p>;
    } else {
      {
        return books.books.map((book, i) =>
          book.favorite ? null : (
            <div className="bookshelf-parent">
              <a
                href={book.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                key={book.id}
              >
                <img
                  className="book-style"
                  src={book.thumbnail}
                  alt={book.id}
                  key={book.id}
                />
              </a>
            </div>
          )
        );
      }
    }
  }

  return (
    <div className="">
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <h1 className="books-heading"> My Digital Bookshelf</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={12}>
          <p className="top-text">
            {" "}
            The books that I have read throughout my life, inspired by{" "}
            <a
              href="https://www.davidbauer.ch/bookshelf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              David Bauer's Bookshelf <LinkBtn />.
            </a>
          </p>
          <p className="top-text">
            These books have helped me grow as a person, and span from science
            fiction, to philosophy, to history, to economics, and more.{" "}
          </p>
          <p className="top-text"> Click on a book to learn more about it! </p>
        </Col>
      </Row>

      <h2 className="subtitle"> My All-Time Favorites</h2>
      <Row className="text-center">
        <Col>
          <button className="list-btn" onClick={handleFavoriteBookListBtn}>
            {" "}
            Show as list
          </button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">{returnBooksOrList()}</Col>
      </Row>

      <h2 className="subtitle"> The Rest of The Story</h2>
      <Row className="text-center">
        <Col>
          <button className="list-btn" onClick={handleRegularBookListBtn}>
            {" "}
            Show as list
          </button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">{returnRestBookOrList()}</Col>
      </Row>
    </div>
  );
}
