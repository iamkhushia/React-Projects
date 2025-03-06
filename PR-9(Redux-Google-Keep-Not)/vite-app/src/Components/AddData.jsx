import { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "../Servise/action/noteAction";

const AddData = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(""); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("⚠️ Title and Content are required!"); 
      return;
    }
    setError(""); 
    dispatch(addNote({ id: Date.now(), title, content }));
    navigate("/");
  };

  return (
   

    <div className="add-note-container">
        <h2 className="add-note-title">Add Note</h2>
        {error && <Alert variant="danger">{error}</Alert>}  

        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control className="add-note-input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            
            <Form.Group>
                <Form.Control className="add-note-input" as="textarea" rows={3} placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>

            <Button type="submit" variant="success" className="add-note-button">Add Note</Button>
        </Form>
    </div>  
  );
};

export default AddData;
