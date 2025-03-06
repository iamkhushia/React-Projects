

import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {  useNavigate,useParams } from "react-router-dom";
import { Button,Form,Container } from "react-bootstrap";
import { updateNote } from "../Servise/action/noteAction";


const EditData = () => {
  const { id } = useParams();
  const notes = useSelector((state) => state.notes.notes);
  const noteToEdit = notes.find((note) => note.id === parseInt(id));
  
  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [content, setContent] = useState(noteToEdit?.content || "");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: parseInt(id), title, content }));
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Edit Note</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">Update</Button>
        <Button variant="secondary" className="ms-2" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default EditData;
