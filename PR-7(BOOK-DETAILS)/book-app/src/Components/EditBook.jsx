import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { getOldStorage, setLocalStorageData } from "../Servise/LocalStorageData";


const EditBook = () => {
  const {id} = useParams();

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
        console.log(" updateSubmit", inputForm)
        let data = getOldStorage();
        let updateData = data.map(book => {
            if(book.id == inputForm.id){
                return inputForm
            }else{
                return book
            }
        });
        setLocalStorageData(updateData);
        navigate("/");
      }


  const handleCancel = () => {
    navigate("/"); 
  };

      useEffect(()=> {
        let data = getOldStorage();
        let singleBook = data.find(book => book.id == id);
        setInputForm(singleBook)
      }, []);

  return (
    <>
    <div className="edit-book-container">
    <Container className="edit-book-form">
        <h2>Edit Book</h2>
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
                    <option value="Cookbooks, food, and diet books " selected= {inputForm.book_category == "Cookbooks, food, and diet books"}>Cookbooks, food, and diet books </option>
                    <option value="Philosophy" selected= {inputForm.book_category == "Philosophy"}>Philosophy </option>
                    <option value="Comic books" selected= {inputForm.book_category == "Comic books"}>Comic books</option>
                    <option value="Mystery and suspense" selected= {inputForm.book_category == "Mystery and suspense"}>Mystery and suspense</option>
                    <option value="Horror" selected= {inputForm.book_category == "Horror"}>Horror</option>
                    <option value="Religion & Spirituality" selected= {inputForm.book_category == "Religion & Spirituality"}>Religion & Spirituality</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm="2"></Form.Label>
                <Col sm="10">
                  <Button className="submit-btn"  variant="success" type="submit" >Edit Book</Button> <br></br>
                  <Button className="cancel-btn mt-3" variant="danger" onClick={handleCancel}>
                Cancel
              </Button>
                </Col>
              </Form.Group>
            </Form>
      </Container>
    </div>
     
    </>
  );
};

export default EditBook;