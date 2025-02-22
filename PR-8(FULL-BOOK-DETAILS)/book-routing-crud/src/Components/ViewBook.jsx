import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getOldStorage } from "../Servise/LocalStorageData";
import { Card, Container, Button } from "react-bootstrap";

const ViewBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = getOldStorage();
    const selectedBook = books.find((b) => b.id === id);
    setBook(selectedBook);
  }, [id]);

  if (!book) {
    return <h3 className="text-center mt-4">Book not found</h3>;
  }

  return (
    

    <Container className=" view-section d-flex justify-content-center align-items-center mt-5">
      <Card >
        <Card.Img variant="top" src={book.book_image}  />
        <Card.Body className="text-center">
          <Card.Title >{book.book_title}</Card.Title>
          <Card.Text >{book.book_desc}</Card.Text>
          <Card.Text><strong>Price:</strong> ₹{book.book_price}</Card.Text>
          <Card.Text><strong>Author:</strong> {book.book_author}</Card.Text>
          <Card.Text><strong>Category:</strong> {book.book_category}</Card.Text>
          <Button variant="dark" onClick={() => navigate("/")}>Go Back</Button>
        </Card.Body>
      </Card>
    </Container>

  );
};

export default ViewBook;
