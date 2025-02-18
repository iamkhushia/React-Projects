
import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";
import { FaEye, FaTrash } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState(getOldStorage());

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  }

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

  // const handleDelete = (id) => {
  //   let updatedData = books.filter((book) => book.id !== id);
  //   setBooks(updatedData);
  //   setLocalStorageData(updatedData)
  // }

  const handleDelete = (id) => {
    setBooks((prevBooks) => {
      const updatedData = prevBooks.filter((book) => book.id !== id);
      setLocalStorageData(updatedData);
      return updatedData;
    });
  };
  
  return (
    <>
      
      <div className="home-container">
        {books.map((book) => (
          <Card key={book.id} className="book-card">
            <Card.Img variant="top" src={book.book_image} />
            <Card.Body>
              <Card.Title>{book.book_title}</Card.Title>
              <Card.Text>{book.book_desc}</Card.Text>
              <Card.Text>💲 {book.book_price}</Card.Text>
              <Card.Text>✍ {book.book_author}</Card.Text>
              <Card.Text>📚 {book.book_category}</Card.Text>

              <div className="card-buttons">
                <Button onClick={() => handleView(book.id)}  className="view-btn">
                  <FaEye />
                </Button>

                <Button onClick={() => handleEdit(book.id)} variant="secondary"  className="edit-btn">
                  <FaPenToSquare />
                </Button>

                <Button onClick={() => handleDelete(book.id)} variant="danger" className="delete-btn">
                  <FaTrash />
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      

    </>
  )
};

export default Home;
