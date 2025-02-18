import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";
import generateUniqueId from 'generate-unique-id'


const AddBook = () => {
    const navigate = useNavigate();
    const initalBook = {
        id: "",
        book_title: "",
        book_desc: "",
        book_price: "",
        book_author: "",
        book_image: "",
        book_category: "",

      };
      let [inputForm, setInputForm] = useState(initalBook);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setInputForm({
          ...inputForm,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Submit", inputForm)
            let id = generateUniqueId({
                length: 4,
                useLetters: false
              })
            let books = getOldStorage();
            books.push({...inputForm, id: id})
            setLocalStorageData(books);
            navigate("/");
      }
  return (
    <>
    <div className="add-book-container">
    <Container className="add-book-form">
        <h2 >Add New Book</h2>
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
                    <option value="Cookbooks, food, and diet books ">Cookbooks, food, and diet books </option>
                    <option value="Philosophy ">Philosophy </option>
                    <option value="Comic books">Comic books</option>
                    <option value="Mystery and suspense">Mystery and suspense</option>
                    <option value="Horror">Horror</option>
                    <option value="Religion & Spirituality">Religion & Spirituality</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button type="submit">Add Book</Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </div>

      
    </>
  );
};

export default AddBook;