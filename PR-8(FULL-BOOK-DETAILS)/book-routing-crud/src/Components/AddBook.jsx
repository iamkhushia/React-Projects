import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";
import generateUniqueId from "generate-unique-id";

const AddBook = () => {
  const navigate = useNavigate();
  const initialBook = {
    id: "",
    book_title: "",
    book_desc: "",
    book_price: "",
    book_author: "",
    book_image: "",
    book_category: "",
  };

  const [inputForm, setInputForm] = useState(initialBook);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!inputForm.book_title.trim()) errors.book_title = "Book title is required";
    if (!inputForm.book_desc.trim()) errors.book_desc = "Description is required";
    if (!inputForm.book_price.trim() || isNaN(inputForm.book_price))
      errors.book_price = "Valid price is required";
    if (!inputForm.book_author.trim()) errors.book_author = "Author name is required";
    if (!inputForm.book_image.trim() || !inputForm.book_image.startsWith("http"))
      errors.book_image = "Valid image URL is required";
    if (!inputForm.book_category) errors.book_category = "Category is required";

    setErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    let id = generateUniqueId({ length: 4, useLetters: false });
    let books = getOldStorage();
    books.push({ ...inputForm, id: id });
    setLocalStorageData(books);
    navigate("/");
  };

  return (
    <>
      <div className="add-book-container">
        <Container className="add-book-form">
          <h2>Add New Book</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Title :
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Title"
                  name="book_title"
                  value={inputForm.book_title}
                  onChange={handleChange}
                />
                {errors.book_title && <p className="text-warning">{errors.book_title}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Description :
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Description"
                  name="book_desc"
                  value={inputForm.book_desc}
                  onChange={handleChange}
                />
                {errors.book_desc && <p className="text-warning">{errors.book_desc}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Price :
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter price"
                  name="book_price"
                  value={inputForm.book_price}
                  onChange={handleChange}
                />
                {errors.book_price && <p className="text-warning">{errors.book_price}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Author :
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Author Name"
                  name="book_author"
                  value={inputForm.book_author}
                  onChange={handleChange}
                />
                {errors.book_author && <p className="text-warning">{errors.book_author}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Image :
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  name="book_image"
                  value={inputForm.book_image}
                  onChange={handleChange}
                />
                {errors.book_image && <p className="text-warning">{errors.book_image}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Book-Category :
              </Form.Label>
              <Col sm="10">
                <Form.Select
                  aria-label="Default select example"
                  name="book_category"
                  onChange={handleChange}
                >
                  <option value="">Select Book Type</option>
                  <option value="Cookbooks, food, and diet books">Cookbooks, food, and diet books</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Comic books">Comic books</option>
                  <option value="Mystery and suspense">Mystery and suspense</option>
                  <option value="Horror">Horror</option>
                  <option value="Religion & Spirituality">Religion & Spirituality</option>
                </Form.Select>
                {errors.book_category && <p className="text-warning">{errors.book_category}</p>}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2"></Form.Label>
              <Col sm="10">
                <Button className="submit-btn" type="submit">Add Book</Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default AddBook;
